import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

  constructor(private usersService: UsersService) {}

  async register(data: any) {
    data.password = await bcrypt.hash(data.password, 10);
    return this.usersService.create(data);
  }

  async login(data: any) {
    const user = await this.usersService.findByEmail(data.email);

    if (!user) return { message: 'User not found' };

    const match = await bcrypt.compare(data.password, user.password);

    if (!match) return { message: 'Invalid password' };

    return { message: 'Login successful', user };
  }
}