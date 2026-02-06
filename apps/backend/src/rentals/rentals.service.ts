import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Rental } from '@prisma/client';

@Injectable()
export class RentalsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.RentalUncheckedCreateInput): Promise<Rental> {
    return this.prisma.rental.create({
      data,
    });
  }

  async findAll(userId?: string): Promise<Rental[]> {
    return this.prisma.rental.findMany({
      where: userId ? { userId } : {},
      include: { vehicle: true },
    });
  }

  async findOne(id: string): Promise<Rental | null> {
    return this.prisma.rental.findUnique({
      where: { id },
      include: { vehicle: true, user: true },
    });
  }
}
