import { IsString, IsOptional, IsNotEmpty} from 'class-validator';

export class createGroupDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  course?: string;

  @IsOptional()
  @IsString()
  location?: string;

 
}