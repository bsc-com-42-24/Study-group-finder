import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('groups')
export class Group {
  
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title?: string;

  @Column({ nullable: true })
  description!: string;

  @Column({ nullable: true })
  course?: string;

  @Column({ nullable: true })
  location?: string;

  @Column({ default: 2 })
  maxMembers!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}