import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from './group.entity';

@Injectable()
export class GroupsService {

  constructor(
    @InjectRepository(Group)
    private groupRepo: Repository<Group>,
  ) {}

  create(data: any) {
    const group = this.groupRepo.create(data);
    return this.groupRepo.save(group);
  }

  findAll() {
    return this.groupRepo.find();
  }

  async joinGroup(id: number) {
    const group = await this.groupRepo.findOne({ where: { id } });

    if (!group) return { message: 'Group not found' };

    group.membersCount += 1;

    return this.groupRepo.save(group);
  }
}