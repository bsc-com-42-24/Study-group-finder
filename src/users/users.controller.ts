import { Controller, Get, Post, Body,Param, Patch, Delete, ParseIntPipe, UseGuards} from '@nestjs/common'; 
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';      
import { Roles } from '../auth/roles.decorator';        
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto'; 
import { UpdateUser } from './dto/update-user.dto'; 
import { RegisterDto } from 'src/auth/dto/register.dto';
import {ApiTags, ApiOperations} from '@nestjs/swagger';

@ApiTags('ussers')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin') // only admin role can access
  
  @Get('all')
  findAllUsers() {
    return ['User1', 'User2', 'User3'];
  }
  
  @Get()
  getAllUsers() {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUser(@Param('id') id: number) {
    return this.usersService.findOne(id);
  } 
   @Post() 
  create(@Body() createUserDto: CreateUserDto) { 
    return this.usersService.create(createUserDto); 
  }
  @Patch(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUser,
  ){
    return this.usersService.update(id, body);
  }
  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }
}