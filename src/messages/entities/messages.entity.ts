import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import {ApiProperty} from '@nestjs/swagger';

@Entity('messages')
export class Message {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty()
  @Column()
  sender!: string;

  @ApiProperty()
  @Column()
  content!: string;

  @ApiProperty()
  @Column()
  groupId!: number; // links message to a study group

  @ApiProperty()
  @CreateDateColumn()
  createdAt!: Date;
}