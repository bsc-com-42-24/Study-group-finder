<<<<<<< HEAD
import { Controller, Post, Body, UseGuards, Req, BadRequestException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import oracledb from 'oracledb';

@Controller('groups')
export class GroupsController {

  @UseGuards(AuthGuard('jwt')) // protects route, puts user on req.user
  @Post()
  async createGroup(@Body() body: any, @Req() req: any) {
    const { groupName, course, year } = body;
    const adminId = req.user.id; 

    let connection;
    try {
      connection = await oracledb.getConnection();

      const result = await connection.execute(
        `INSERT INTO groups (group_name, course, year, admin_id)
         VALUES (:groupName, :course, :year, :adminId)
         RETURNING id INTO :id`,
        {
          groupName,
          course,
          year,
          adminId,
          id: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER }
        },
        { autoCommit: true }
      );

      const groupId = result.outBinds.id[0];

      
      await connection.execute(
        `INSERT INTO group_members (group_id, user_id) VALUES (:groupId, :userId)`,
        { groupId, userId: adminId },
        { autoCommit: true }
      );

      return { id: groupId, groupName, course, year, admin: adminId };

    } catch (error) {
      console.error(error);
      throw new BadRequestException('Failed to create group');
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
=======
import { Controller, Post, Get, Param, Put, Delete, Body } from '@nestjs/common';
import {GroupsService } from './groups.service';
import { createGroupDto } from './dto/create-group.dto';
 

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  create(@Body() createGroupDto: createGroupDto) {
    return this.groupsService.create(createGroupDto);
  }

  @Get()
  findAll() {
    return this.groupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupsService.findOne(Number(id));
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateData: createGroupDto,
  ) {
    return this.groupsService.update(Number(id), updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupsService.remove(Number(id));
  }
}
>>>>>>> 8e5c342b101c6b77b5b12c345ec8ec55a9d39fd5
