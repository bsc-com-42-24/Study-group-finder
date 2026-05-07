import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

  login() {
    return 'Login working from service';
  }

  register() {
    return 'Register working from service';
  }
}