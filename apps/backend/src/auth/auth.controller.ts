import { Controller, Post, Body, Req, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: any, @Req() req: any) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const userAgent = req.headers['user-agent'];
    const ip = req.ip;
    return this.authService.login(user, userAgent, ip);
  }

  @Post('refresh')
  async refresh(@Body('refresh_token') refreshToken: string) {
    return this.authService.refreshToken(refreshToken);
  }
}
