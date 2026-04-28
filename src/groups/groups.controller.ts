import { Controller, Post, Get, Param, Put, Delete, Body } from '@nestjs/common';
import {GroupsService } from './groups.service';


@Controller('groups')
export class GroupsController {
    constructor(private readonly groupsService: GroupsService){}

    @Get()
     list(){
        return this.groupsService.listAll();
    }
    
    @Get(':id')
    getDetails(@Param('id')id:string){
        return this.groupsService.getAlldetails(id);
    }

    @Put(':id')
    update(@Param('id')id: string, @Body()body:any){
        return this.groupsService.updategroup(id, body);
    }

    @Delete(':id')
    remove(@Param('id')id:string){
        return this.groupsService.deletegroup(id);
    }

}
