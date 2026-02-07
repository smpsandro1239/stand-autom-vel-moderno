# @stand/sdk

TypeScript SDK for interacting with the StandPro API.

## Installation

```bash
npm install @stand/sdk
```

## Usage

### Initialization

```typescript
import { StandSDK } from '@stand/sdk';

const sdk = new StandSDK({
  baseURL: 'http://localhost:3001',
});
```

### Authentication

```typescript
// Login
const { accessToken, refreshToken, user } = await sdk.auth.login({
  email: 'user@example.com',
  password: 'password123',
});

// Set token for subsequent requests
sdk.setToken(accessToken);

// Register
await sdk.auth.register({
  name: 'John Doe',
  email: 'john@example.com',
  password: 'password123',
  role: 'USER',
});
```

### Vehicles

```typescript
// List all vehicles
const vehicles = await sdk.vehicles.findAll();

// Filter vehicles
const sellerVehicles = await sdk.vehicles.findAll({ ownerId: 'some-id' });
const rentalVehicles = await sdk.vehicles.findAll({ type: 'RENTAL' });

// Get single vehicle
const vehicle = await sdk.vehicles.findOne('vehicle-id');

// Create vehicle
await sdk.vehicles.create({
  make: 'Tesla',
  model: 'Model 3',
  year: 2023,
  price: 45000,
  mileage: 0,
  type: 'SALE',
  ownerId: 'seller-id',
});
```

### Leads & Rentals

```typescript
// Create a lead
await sdk.leads.create({
  name: 'Interested Buyer',
  email: 'buyer@example.com',
  message: 'I want to see this car.',
  vehicleId: 'vehicle-id',
});

// Create a rental
await sdk.rentals.create({
  startDate: new Date(),
  endDate: new Date(Date.now() + 86400000),
  vehicleId: 'vehicle-id',
});
```

## Features

- Fully typed with TypeScript.
- Based on Axios for robust HTTP requests.
- Modular architecture (Auth, Vehicles, Leads, Rentals).
- Support for token rotation and session management.
