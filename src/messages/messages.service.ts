import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
    findAll(){
        return['message 1','message 2'];
    }
}
