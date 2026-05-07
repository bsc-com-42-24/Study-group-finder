import { Controller, Post, Body, Get , UseGuards, Request} from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
     constructor(private authService: AuthService){}

    @UseGuards(JwtAuthGuard)
    @Get('me')
    getMe(@Request() req) {
    return req.user;
    }

    @Post('register')
        async register(@Body() body: RegisterDto) {
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

    /*@Get('me')
    me(){
        return this.authService.getCurrentUser();
    }*/
}
