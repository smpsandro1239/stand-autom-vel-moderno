import axios, { AxiosInstance } from 'axios';

export interface SDKConfig {
  baseURL: string;
  token?: string;
}

export class StandClient {
  public axios: AxiosInstance;

  constructor(config: SDKConfig) {
    this.axios = axios.create({
      baseURL: config.baseURL,
      headers: {
        Authorization: config.token ? `Bearer ${config.token}` : undefined,
      },
    });
  }

  setToken(token: string) {
    this.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
}
