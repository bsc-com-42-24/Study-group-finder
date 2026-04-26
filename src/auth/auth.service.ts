import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    register(body:any){
        return{message:'User registered',data:body};
    }

    login(body:any){
        return{message:'User logged in', email: body.email};
    }

    logout(){
        return{message: 'User logged out'};
    }

    getCurrentUser(){
        return{id:1, name:'Demo User'};
    }
}
