import { Injectable, NotFoundException } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { User } from './entities/user.entity'; 
//import { CreateUserDto } from './dto/create-user.dto'; 
import { UpdateUser } from './dto/update-user.dto'; 
import { RegisterDto } from 'src/auth/dto/register.dto';
import * as bcrypt from 'bcrypt';
//import { userInfo } from 'node:os';
 
@Injectable() 
export class UsersService { 
  constructor( 
    @InjectRepository(User) 
    private usersRepository: Repository<User>, 
  ) {} 
 
  /* async create(createUserDto: CreateUserDto): Promise<User> { 
    const user = this.usersRepository.create(createUserDto); 
    return await this.usersRepository.save(user); 
  }*/
 
  /*async create(dto: RegisterDto): Promise<User> {
    const user = this.repo.create(dto);
    return this.repo.save(user);
  }*/
 
  /*async create(dto: RegisterDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const user = this.repo.create({ ...dto, password: hashedPassword });
    return this.repo.save(user);
  }*/

  async create(dto: RegisterDto): Promise<User> {

    const hashedPassword = dto.password
     ? await bcrypt.hash(dto.password, 10)
     : undefined;

    const user = this.usersRepository.create({
      ...dto,
      password: hashedPassword,
    });

    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> { 
    return await this.usersRepository.find(); 
  } 
 
  async findOne(id: number): Promise<User> { 
    const user = await this.usersRepository.findOne({ where: { id } }); 
    if (!user) throw new NotFoundException(`User with id ${id} not found`); 
    return user;
  } 
 
  async update(id: number, updateUserDto: UpdateUser): Promise<User> { 
    await this.findOne(id); 
    await this.usersRepository.update(id, updateUserDto); 
    return await this.findOne(id); 
  } 
 
  async remove(id: number): Promise<{ message: string }> { 
    await this.findOne(id); 
    await this.usersRepository.delete(id); 
    return { message: `User ${id} deleted successfully` }; 
  } 
  
}

