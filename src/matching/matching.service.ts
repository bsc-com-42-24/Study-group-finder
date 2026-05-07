import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';

@Injectable()
export class MatchingService {

  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  findMatches(data: any) {
    return this.userRepo.find({
      where: {
        course: data.course,
        location: data.location,
      },
    });
  }
}