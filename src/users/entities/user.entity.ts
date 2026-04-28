import { Entity, PrimaryGeneratedColumn, Column,} from 'typeorm'; 
@Entity('users') 
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 255 })
  name?: string;

  @Column({ length: 255, unique: true })
  email?: string;

  @Column({ length: 255 })
  password?: string;

  @Column({ length: 255, nullable: true })
  school?: string;

  @Column({ type: 'clob', nullable: true })
  course?: string;

  @Column({ length: 255, nullable: true })
  program?: string;

  @Column({ type: 'number', nullable: true })
  year?: number;

  @Column({ length: 255, nullable: true })
  location?: string;

  @Column({ length: 255, nullable: true })
  profilePicture?: string;
}

