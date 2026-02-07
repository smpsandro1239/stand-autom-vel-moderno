import { StandClient } from '../client';
import { LoginDto, RegisterDto } from '@stand/shared';

export class AuthModule {
  constructor(private client: StandClient) {}

  async login(data: LoginDto) {
    const response = await this.client.axios.post('/auth/login', data);
    return response.data;
  }

  async register(data: RegisterDto) {
    const response = await this.client.axios.post('/auth/register', data);
    return response.data;
  }

  async refresh(userId: string, refreshToken: string) {
    const response = await this.client.axios.post('/auth/refresh', { userId, refreshToken });
    return response.data;
  }
}
