import { IsEmail,IsString, IsOptional,} from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  name?: string;

  @ApiProperty()
  @IsEmail()
  email?: string;

  @ApiProperty()
  @IsString()
  password?: string;

  @ApiProperty()
  @IsOptional()
  school?: string;

  @ApiProperty()
  @IsOptional()
  course?: string;

  @ApiProperty()
  @IsOptional()
  program?: string;

  @ApiProperty()
  @IsOptional()
  year?: number;

  @ApiProperty()
  @IsOptional()
  location?: string;

  @ApiProperty()
  @IsOptional()
  profilePicture?: string;
}
