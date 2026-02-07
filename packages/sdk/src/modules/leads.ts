import { StandClient } from '../client';

export class LeadsModule {
  constructor(private client: StandClient) {}

  async create(data: any) {
    const response = await this.client.axios.post('/leads', data);
    return response.data;
  }

  async findAll() {
    const response = await this.client.axios.get('/leads');
    return response.data;
  }
}
