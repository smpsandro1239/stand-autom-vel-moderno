import { StandClient, SDKConfig } from './client';
import { AuthModule } from './modules/auth';
import { VehiclesModule } from './modules/vehicles';

export * from './client';
export * from './modules/auth';
export * from './modules/vehicles';

export class StandSDK {
  public auth: AuthModule;
  public vehicles: VehiclesModule;
  private client: StandClient;

  constructor(config: SDKConfig) {
    this.client = new StandClient(config);
    this.auth = new AuthModule(this.client);
    this.vehicles = new VehiclesModule(this.client);
  }

  setToken(token: string) {
    this.client.setToken(token);
  }
}
