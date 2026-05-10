import { Injectable,NotFoundException } from '@nestjs/common';
import { createGroupDto } from './dto/create-group.dto';
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { Group } from './entities/group.entity';  



@Injectable()
export class GroupsService {
    constructor(
        @InjectRepository(Group)
        private groupsRepository:Repository<Group>
    ){}

    
 async create(dto: createGroupDto) {
    const group = this.groupsRepository.create(dto);
    return await this.groupsRepository.save(group);

  }

  
  async findAll(): Promise<Group[]> {
    return await this.groupsRepository.find();
  }

  
  async findOne(id: number): Promise<Group> {
    const group = await this.groupsRepository.findOne({ where: { id } });
    if (!group) throw new NotFoundException(`Group with id ${id} not found`);
    return group;
  }

  
  async update(id: number, updateData: Partial<createGroupDto>) {
    const group = await this.findOne(id);
    Object.assign(group, updateData);
    return this.groupsRepository.save(group);
  }

  
  async remove(id: number): Promise<void> {
    const group = await this.findOne(id);
    await this.groupsRepository.remove(group);
  }
}



































































