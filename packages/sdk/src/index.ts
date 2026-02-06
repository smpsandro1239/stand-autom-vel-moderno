import { StandClient, SDKConfig } from './client';
import { AuthModule } from './modules/auth';
import { VehiclesModule } from './modules/vehicles';
import { LeadsModule } from './modules/leads';
import { RentalsModule } from './modules/rentals';

export * from './client';
export * from './modules/auth';
export * from './modules/vehicles';
export * from './modules/leads';
export * from './modules/rentals';

export class StandSDK {
  public auth: AuthModule;
  public vehicles: VehiclesModule;
  public leads: LeadsModule;
  public rentals: RentalsModule;
  private client: StandClient;

  constructor(config: SDKConfig) {
    this.client = new StandClient(config);
    this.auth = new AuthModule(this.client);
    this.vehicles = new VehiclesModule(this.client);
    this.leads = new LeadsModule(this.client);
    this.rentals = new RentalsModule(this.client);
  }

  setToken(token: string) {
    this.client.setToken(token);
  }
}
