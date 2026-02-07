import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('password123', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@stand.com' },
    update: {},
    create: {
      email: 'admin@stand.com',
      name: 'Admin Sandro',
      password,
      role: Role.ADMIN,
    },
  });

  const user = await prisma.user.upsert({
    where: { email: 'user@stand.com' },
    update: {},
    create: {
      email: 'user@stand.com',
      name: 'Joao Silva',
      password,
      role: Role.USER,
    },
  });

  await prisma.vehicle.create({
    data: {
      make: 'Tesla',
      model: 'Model 3',
      year: 2023,
      price: 45000,
      mileage: 0,
      fuelType: 'ELECTRIC',
      transmission: 'AUTOMATIC',
      description: 'Carro elétrico topo de gama.',
      createdById: admin.id,
      isAvailable: true,
    },
  });

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
