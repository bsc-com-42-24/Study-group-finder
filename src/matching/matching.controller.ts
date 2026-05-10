import { Controller, Get, UseGuards, Req, NotFoundException, BadRequestException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import oracledb from 'oracledb';

@Controller('matching')
export class MatchingController {

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findMatches(@Req() req: any) {
    const userId = req.user.id;
    let connection;

    try {
      connection = await oracledb.getConnection(); // fixed case

      // Get current user
      const currentUserRes = await connection.execute(
        `SELECT id, program, year, location FROM users WHERE id = :id`,
        [userId],
        { outFormat: oracledb.OUT_FORMAT_OBJECT }
      );

      const currentUser = currentUserRes.rows?.[0];
      if (!currentUser) {
        throw new NotFoundException('User not found');
      }

      // Get all other users
      const usersRes = await connection.execute(
        `SELECT id, program, year, location FROM users WHERE id!= :id`,
        [userId],
        { outFormat: oracledb.OUT_FORMAT_OBJECT }
      );

      const users = usersRes.rows || [];

      // Score matches
      const matches = users
       .map((user: any) => {
          let score = 0;

          if (user.PROGRAM === currentUser.PROGRAM) score += 50;
          if (user.YEAR === currentUser.YEAR) score += 30;
          if (user.LOCATION === currentUser.LOCATION) score += 20;

          return score >= 50? { user, score } : null;
        })
       .filter(Boolean)
       .sort((a: any, b: any) => b.score - a.score); // sort highest first

      return { matches };

    } catch (error) {
      console.error(error);
      throw new BadRequestException('Failed to find matches');
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error('Error closing connection:', err);
        }
      }
    }
  }
}