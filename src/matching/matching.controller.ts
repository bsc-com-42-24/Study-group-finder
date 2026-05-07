import { Controller, Post, Body } from '@nestjs/common';
import { MatchingService } from './matching.service';

@Controller('matching')
export class MatchingController {

  constructor(private matchingService: MatchingService) {}

  @Post()
  match(@Body() body: any) {
    return this.matchingService.findMatches(body);
  }
}