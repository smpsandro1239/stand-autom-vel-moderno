import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('password123', 10);

  // Users
  const admin = await prisma.user.upsert({
    where: { email: 'admin@standpro.com' },
    update: {},
    create: {
      email: 'admin@standpro.com',
      name: 'Administrador StandPro',
      password,
      role: Role.ADMIN,
    },
  });

  // Veículos Premium
  const vehicles = [
    {
      make: 'Porsche',
      model: '911 GT3 RS',
      year: 2024,
      price: 245000,
      mileage: 150,
      fuelType: 'GASOLINA',
      transmission: 'PDK',
      description: 'Performance lendária.',
      images: ['https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200'],
      createdById: admin.id,
    }
  ];

  for (const v of vehicles) {
    await prisma.vehicle.create({ data: v });
  }

  console.log('Seed completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
