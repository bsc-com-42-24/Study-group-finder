import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { MatchingService } from './matching.service';
import { MatchingController } from './matching.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [MatchingService],
  controllers: [MatchingController],
})
export class MatchingModule {}