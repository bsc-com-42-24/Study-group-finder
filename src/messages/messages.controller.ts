import { Controller,Get } from '@nestjs/common';
import { MessagesService } from './messages.service';
@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesServices: MessagesService){}
@Get()
findAll(): string {
    return 'All messages';
}
}
