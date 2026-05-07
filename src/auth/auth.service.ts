import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service'; // adjust path to your users module
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService, 
        private userService: UsersService,
    ) {}

    async register(body: RegisterDto) {
        // Save the user (replace with your actual userService or repository logic)
        const newUser = await this.userService.create(body);

        // Build the JWT payload
        const payload = { 
            email: newUser.email, 
            userType: newUser.UserType, 
            sub: newUser.id 
        };

        // Return a signed token
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async login(User: User){
        /*const user = await this.userService.findByEmail(email);
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new UnauthorizedException('Invalid credentials');
        }*/

        const payload = { 
            email: User.email, 
            UserType: User.UserType, 
            sub: User.id
        };

        return{
            access_token: this.jwtService.sign(payload),
        };
    }

    logout(){
        return{message: 'User logged out'};
    }

    getCurrentUser(user: any){
        return {
            id: user.sub,        // comes from JWT payload
            email: user.email,
            userType: user.userType, // or role
        };
    }
}
