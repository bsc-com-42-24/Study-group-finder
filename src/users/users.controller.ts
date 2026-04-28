import { Controller, Get, Post, Body,Param, Patch, Delete, ParseIntPipe} from '@nestjs/common'; 
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto'; 
import { UpdateUser } from './dto/update-user.dto'; 

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

 
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