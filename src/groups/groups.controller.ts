import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { GroupsService } from './groups.service';

@Controller('groups')
export class GroupsController {

  constructor(private groupsService: GroupsService) {}

  @Post()
  create(@Body() body: any) {
    return this.groupsService.create(body);
  }

  @Get()
  findAll() {
    return this.groupsService.findAll();
  }

  @Post('join/:id')
  join(@Param('id') id: number) {
    return this.groupsService.joinGroup(Number(id));
  }
}