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

export class RegisterDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsEmail()
  email?: string;

  @IsString()
  @MinLength(4)
  password?: string;

  @IsString()
  @IsOptional()
  userType?: string; // matches UserType column

  @IsString()
  @IsOptional()
  school?: string;

  @IsString()
  @IsOptional()
  course?: string;

  @IsString()
  @IsOptional()
  program?: string;

  @IsOptional()
  year?: number;

  @IsString()
  @IsOptional()
  location?: string;

  @IsString()
  @IsOptional()
  profilePicture?: string;
}
