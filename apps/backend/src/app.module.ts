import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { RentalsModule } from './rentals/rentals.module';
import { LeadsModule } from './leads/leads.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    VehiclesModule,
    RentalsModule,
    LeadsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
