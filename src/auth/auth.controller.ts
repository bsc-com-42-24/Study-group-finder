import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('register')
    register(@Body() body:any){
        return this.authService.register(body);
    }

    @Post('login')
    login(@Body() body:any){
        return this.authService.login(body);
    }

    @Post('Logout')
    logout(){
        return this.authService.logout();
    }

    @Get('me')
    me(){
        return this.authService.getCurrentUser();
    }
}
