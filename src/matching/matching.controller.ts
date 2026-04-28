import { Controller, Get, Query, Param } from '@nestjs/common';
import { MatchingService } from './matching.service';

@Controller('matching')
export class MatchingController {
    constructor(private readonly matchingService: MatchingService){}

    @Get()
    recommend(@Query('course')course:string){
        return this.matchingService.recommendGroups(course);
    }

    @Get('user')
    findUsers(@Query('skills')skills:string){
        return this.matchingService.findUsers(skills);
    }

    @Get('group/:id')
    similarGroups(@Param('id')id:string){
        return this.matchingService.similarGroups(id);
    }

    @Get('join_suggestions')
    joinSuggestions(){
        return this.matchingService.joinSuggestions();
    }
}
