import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  sender!: string;

  @Column()
  content!: string;

  @Column()
  groupId!: number; // links message to a study group

  @CreateDateColumn()
  createdAt!: Date;
}