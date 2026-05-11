import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import {ApiProperty} from '@nesjs/swagger';

@Entity('groups')
export class Group {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiProperty()
  @Column()
  title?: string;

  @ApiProperty()
  @Column({ nullable: true })
  description!: string;

  @ApiProperty()
  @Column({ nullable: true })
  course?: string;

  @ApiProperty()
  @Column({ nullable: true })
  location?: string;

  @ApiProperty()
  @Column({ default: 2 })
  maxMembers!: number;

  @ApiProperty()
  @CreateDateColumn()
  createdAt!: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt!: Date;
}