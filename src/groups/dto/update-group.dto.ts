import {PartialType} from '@nestjs/mapped-types';
import {createGroupDto} from'./create-group.dto';

export class UpdateGroupDto extends PartialType(createGroupDto){}