import { Injectable } from '@nestjs/common';

@Injectable()
export class GroupsService {
    create(body: any) { 
return { message: 'Group created', data: body }; 
}

listAll(){
  return[{id:1,title:'Study Group'}];  
}

getAlldetails(id:string){
    return { id, title: 'Group ' + id };
}

updategroup(id:string, body:any) {
    return{message: 'Group updated', id, data:body};
}

deletegroup(id: string){
    return{message: 'Group deleted',id};
     }
    }