import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('password123', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@standpro.com' },
    update: {},
    create: {
      email: 'admin@standpro.com',
      name: 'Admin Sandro',
      password,
      role: Role.ADMIN,
    },
  });

  const vehicles = [
    {
      make: 'Ferrari',
      model: 'SF90 Stradale',
      year: 2024,
      price: 525000,
      mileage: 0,
      fuelType: 'HYBRID',
      transmission: 'DUAL-CLUTCH',
      description: 'O auge da engenharia de Maranello.',
      images: ['https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1200'],
      createdById: admin.id,
    }
  ];

  for (const v of vehicles) {
    await prisma.vehicle.create({ data: v });
  }

  console.log('Seed Restored for Production!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
