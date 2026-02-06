import axios, { AxiosInstance } from 'axios';

export class VehiclePlatformSDK {
  private api: AxiosInstance;

  constructor(baseURL: string) {
    this.api = axios.create({ baseURL });
  }

  // Auth Module
  auth = {
    login: async (credentials: any) => {
      const { data } = await this.api.post('/auth/login', credentials);
      return data;
    },
    refresh: async (token: string) => {
      const { data } = await this.api.post('/auth/refresh', { refresh_token: token });
      return data;
    }
  };

  // Vehicles Module
  vehicles = {
    list: async () => {
      const { data } = await this.api.get('/vehicles');
      return data;
    },
    get: async (id: string) => {
      const { data } = await this.api.get(`/vehicles/${id}`);
      return data;
    },
    create: async (vehicle: any) => {
      const { data } = await this.api.post('/vehicles', vehicle);
      return data;
    }
  };
}
