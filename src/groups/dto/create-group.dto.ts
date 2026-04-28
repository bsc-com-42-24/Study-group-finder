import{IsString,IsOptional,IsNotEmpty} from 'class-validator';

export class createGroupDto {
  @IsString()
  @IsNotEmpty() 
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;
}