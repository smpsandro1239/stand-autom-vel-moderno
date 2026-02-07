import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any, userAgent: string, ip: string) {
    const payload = { email: user.email, sub: user.id, role: user.role };
    const accessToken = this.jwtService.sign(payload, { expiresIn: '15m' });
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: '7d',
      secret: process.env.REFRESH_TOKEN_SECRET
    });

    // Create session for multi-session support
    await this.prisma.session.create({
      data: {
        userId: user.id,
        refreshToken,
        userAgent,
        ipAddress: ip,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  async refreshToken(token: string) {
    try {
      const payload = this.jwtService.verify(token, { secret: process.env.REFRESH_TOKEN_SECRET });
      const session = await this.prisma.session.findUnique({ where: { refreshToken: token } });

      if (!session || !session.isValid || session.expiresAt < new Date()) {
        throw new UnauthorizedException('Invalid or expired refresh token');
      }

      // Rotate token
      const newPayload = { email: payload.email, sub: payload.sub, role: payload.role };
      const newAccessToken = this.jwtService.sign(newPayload, { expiresIn: '15m' });
      const newRefreshToken = this.jwtService.sign(newPayload, {
        expiresIn: '7d',
        secret: process.env.REFRESH_TOKEN_SECRET
      });

      await this.prisma.session.update({
        where: { id: session.id },
        data: { refreshToken: newRefreshToken },
      });

      return {
        access_token: newAccessToken,
        refresh_token: newRefreshToken,
      };
    } catch (e) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }
}
