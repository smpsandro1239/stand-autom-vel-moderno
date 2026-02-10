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
      make: 'Porsche',
      model: '911 GT3 RS',
      year: 2024,
      price: 268500,
      mileage: 450,
      fuelType: 'GASOLINA',
      transmission: 'PDK',
      description: 'A joia da coroa da Porsche.',
      images: ['https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200'],
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
