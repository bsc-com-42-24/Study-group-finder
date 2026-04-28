import { IsEmail,IsString, IsOptional,} from 'class-validator';

export class CreateUserDto {
  @IsString()
  name?: string;

  @IsEmail()
  email?: string;

  @IsString()
  password?: string;

  @IsOptional()
  school?: string;

  @IsOptional()
  course?: string;

  @IsOptional()
  program?: string;

  @IsOptional()
  year?: number;

  @IsOptional()
  location?: string;

  @IsOptional()
  profilePicture?: string;
}
