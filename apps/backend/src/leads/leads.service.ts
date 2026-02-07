import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Lead } from '@prisma/client';

@Injectable()
export class LeadsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.LeadUncheckedCreateInput): Promise<Lead> {
    return this.prisma.lead.create({
      data,
    });
  }

  async findAll(): Promise<Lead[]> {
    return this.prisma.lead.findMany({
      include: { vehicle: true },
    });
  }
}
