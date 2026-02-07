import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Vehicle, Prisma } from '@prisma/client';

@Injectable()
export class VehiclesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.vehicle.findMany({
      include: { createdBy: { select: { name: true, email: true } } },
    });
  }

  async findOne(id: string) {
    return this.prisma.vehicle.findUnique({ where: { id } });
  }

  async create(data: Prisma.VehicleCreateInput) {
    return this.prisma.vehicle.create({ data });
  }

  async update(id: string, data: Prisma.VehicleUpdateInput) {
    return this.prisma.vehicle.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.vehicle.delete({ where: { id } });
  }
}
