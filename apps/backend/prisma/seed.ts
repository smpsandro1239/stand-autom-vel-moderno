import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('password123', 10);

  // Limpar dados existentes
  // await prisma.lead.deleteMany();
  // await prisma.rental.deleteMany();
  // await prisma.vehicle.deleteMany();
  // await prisma.session.deleteMany();
  // await prisma.user.deleteMany();

  const admin = await prisma.user.upsert({
    where: { email: 'admin@standpro.com' },
    update: {},
    create: {
      email: 'admin@standpro.com',
      name: 'Sandro Administrador',
      password,
      role: Role.ADMIN,
    },
  });

  const vehicles = [
    {
      make: 'Porsche',
      model: '911 Carrera S',
      year: 2024,
      price: 185000,
      mileage: 1200,
      fuelType: 'GASOLINE',
      transmission: 'PDK',
      description: 'Performance lendária num estado imaculado.',
      images: ['https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800'],
      createdById: admin.id,
    }
  ];

  for (const v of vehicles) {
    await prisma.vehicle.create({ data: v });
  }

  console.log('Seed restored to Postgres format.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
