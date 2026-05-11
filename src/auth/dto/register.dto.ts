/*import { IsString, IsEmail, MinLength, IsOptional } from 'class-validator';

export class RegisterDto {
  @IsString()
  username?: string;

  @IsEmail()
  email?: string;

  @IsString()
  @MinLength(6)
  password?: string;

  @IsOptional()
  @IsString()
  UserType?: string;

}*/

import { IsEmail, IsString, MinLength, IsOptional } from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty()
  @IsEmail()
  email?: string;

  @ApiProperty()
  @IsString()
  @MinLength(4)
  password?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  userType?: string; // matches UserType column

  @ApiProperty()
  @IsString()
  @IsOptional()
  school?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  course?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  program?: string;

  @ApiProperty()
  @IsOptional()
  year?: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  location?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  profilePicture?: string;
}
