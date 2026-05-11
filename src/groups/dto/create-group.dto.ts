import { IsString, IsOptional, IsNotEmpty} from 'class-validator';
import{ApiProperty} from '@nestjs/swagger';

export class createGroupDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title!: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  course?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  location?: string;

 
}