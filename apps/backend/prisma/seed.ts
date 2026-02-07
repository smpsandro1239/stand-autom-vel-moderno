import { PrismaClient, Role, VehicleStatus } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('password123', 10);

  // Criar Admin
  const admin = await prisma.user.upsert({
    where: { email: 'admin@stand.com' },
    update: {},
    create: {
      email: 'admin@stand.com',
      name: 'Admin Sandro',
      password: hashedPassword,
      role: Role.ADMIN,
    },
  });

  // Criar Seller
  const seller = await prisma.user.upsert({
    where: { email: 'seller@stand.com' },
    update: {},
    create: {
      email: 'seller@stand.com',
      name: 'Vendedor Pro',
      password: hashedPassword,
      role: Role.SELLER,
    },
  });

  // Criar Veículos
  await prisma.vehicle.create({
    data: {
      make: 'Tesla',
      model: 'Model 3',
      year: 2023,
      price: 45000,
      mileage: 0,
      description: 'Elétrico de última geração',
      status: VehicleStatus.AVAILABLE,
      type: 'SALE',
      ownerId: seller.id,
      images: ['https://example.com/tesla.jpg'],
    },
  });

  await prisma.vehicle.create({
    data: {
      make: 'BMW',
      model: 'iX',
      year: 2022,
      price: 500,
      mileage: 5000,
      description: 'Aluguer diário de luxo',
      status: VehicleStatus.AVAILABLE,
      type: 'RENTAL',
      ownerId: seller.id,
      images: ['https://example.com/bmw.jpg'],
    },
  });

  console.log('Seed completo!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
