import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('groups')
export class Group {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  course!: string;

  @Column()
  location!: string;

  @Column({ default: 0 })
  membersCount!: number;
}