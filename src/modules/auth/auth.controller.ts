import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('register')
  register(@Body() userObj: RegisterAuthDto) {
    return userObj;
  }

  @Post('login')
  login(@Body() userObj: LoginAuthDto) {
    return this.authService.login(userObj);
  }

}