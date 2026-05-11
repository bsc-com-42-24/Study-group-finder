import { Entity, PrimaryGeneratedColumn, Column,} from 'typeorm'; 
import {ApiProperty} from '@nestjs/swagger';


@Entity('users') 
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiProperty()
  @Column({ length: 255 })
  name?: string;

  @ApiProperty()
  @Column({ length: 255, unique: true })
  email?: string;

  @ApiProperty()
  @Column({ length: 255 })
  password?: string;

  @ApiProperty()
  @Column({ default: 'user' }) 
  UserType?: string; 

  @ApiProperty()
  @Column({ length: 255, nullable: true })
  school?: string;

  @ApiProperty()
  @Column({ type: 'clob', nullable: true })
  course?: string;

  @ApiProperty()
  @Column({ length: 255, nullable: true })
  program?: string;

  @ApiProperty()
  @Column({ type: 'number', nullable: true })
     year?: number;

  @ApiProperty()
  @Column({ length: 255, nullable: true })
    location?: string;

  @ApiProperty()  
  @Column({ length: 255, nullable: true })
      profilePicture?: string;

  @ApiProperty()    
  @Column({length:255,nullable:true})
      UserType?:string;

  
}

