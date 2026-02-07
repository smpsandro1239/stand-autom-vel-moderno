import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesService } from '../vehicles.service';
import { PrismaService } from '../../prisma/prisma.service';

describe('VehiclesService', () => {
  let service: VehiclesService;
  let prisma: PrismaService;

  const mockPrismaService = {
    vehicle: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VehiclesService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<VehiclesService>(VehiclesService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a vehicle', async () => {
      const vehicleData: any = { make: 'Tesla', model: 'Model 3', ownerId: 'user1' };
      mockPrismaService.vehicle.create.mockResolvedValue(vehicleData);

      const result = await service.create(vehicleData);
      expect(result).toEqual(vehicleData);
      expect(mockPrismaService.vehicle.create).toHaveBeenCalledWith({ data: vehicleData });
    });
  });

  describe('findAll', () => {
    it('should return an array of vehicles', async () => {
      const vehicles = [{ id: '1', make: 'Tesla' }];
      mockPrismaService.vehicle.findMany.mockResolvedValue(vehicles);

      const result = await service.findAll({});
      expect(result).toEqual(vehicles);
    });
  });
});
