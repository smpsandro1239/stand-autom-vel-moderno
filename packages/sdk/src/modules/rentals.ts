import { StandClient } from '../client';

export class RentalsModule {
  constructor(private client: StandClient) {}

  async create(data: any) {
    const response = await this.client.axios.post('/rentals', data);
    return response.data;
  }

  async findAll() {
    const response = await this.client.axios.get('/rentals');
    return response.data;
  }

  async findOne(id: string) {
    const response = await this.client.axios.get(`/rentals/${id}`);
    return response.data;
  }
}
