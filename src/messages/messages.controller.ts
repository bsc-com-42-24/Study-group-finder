import { Controller, Post, Body, UseGuards, Req, BadRequestException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import oracledb from 'oracledb';
import {ApiTags,ApiOperation} from '@nestjs/swagger';

@ApiTags('messages')
@Controller('messages')
export class MessagesController {

  @UseGuards(AuthGuard('jwt'))
  @Post('send')
  async sendMessage(@Body() body: any, @Req() req: any) {
    const { receiver, content } = body;
    const sender = req.user?.id; 

    if (!sender ||!receiver ||!content) {
      throw new BadRequestException('Sender, receiver, and content are required');
    }

    let connection;
    try {
      connection = await oracledb.getConnection();

      const result = await connection.execute(
        `INSERT INTO messages (sender_id, receiver_id, content, created_at)
         VALUES (:sender, :receiver, :content, SYSTIMESTAMP)
         RETURNING id INTO :id`,
        {
          sender,
          receiver,
          content,
          id: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER }
        },
        { autoCommit: true }
      );

      const messageId = result.outBinds.id[0];
      return { id: messageId, sender, receiver, content };

    } catch (error) {
      console.error(error);
      throw new BadRequestException('Failed to send message');
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
}