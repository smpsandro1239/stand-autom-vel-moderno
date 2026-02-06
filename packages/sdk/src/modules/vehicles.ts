import { StandClient } from '../client';
import { CreateVehicleDto, UpdateVehicleDto } from '@stand/shared';

export class VehiclesModule {
  constructor(private client: StandClient) {}

  async findAll() {
    const response = await this.client.axios.get('/vehicles');
    return response.data;
  }

  async findOne(id: string) {
    const response = await this.client.axios.get(`/vehicles/${id}`);
    return response.data;
  }

  async create(data: CreateVehicleDto) {
    const response = await this.client.axios.post('/vehicles', data);
    return response.data;
  }

  async update(id: string, data: UpdateVehicleDto) {
    const response = await this.client.axios.patch(`/vehicles/${id}`, data);
    return response.data;
  }

  async remove(id: string) {
    const response = await this.client.axios.delete(`/vehicles/${id}`);
    return response.data;
  }
}
