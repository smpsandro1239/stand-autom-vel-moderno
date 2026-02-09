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

  const seller = await prisma.user.upsert({
    where: { email: 'vendedor@stand.com' },
    update: {},
    create: {
      email: 'vendedor@stand.com',
      name: 'Carlos Vendedor',
      password,
      role: Role.MANAGER,
    },
  });

  const vehicles = [
    {
      make: 'Tesla',
      model: 'Model 3 Performance',
      year: 2024,
      price: 55900,
      mileage: 0,
      fuelType: 'ELECTRIC',
      transmission: 'AUTOMATIC',
      description: 'O futuro da condução. 0-100km/h em 3.1s.',
      images: ['https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800'],
      createdById: admin.id,
    },
    {
      make: 'Porsche',
      model: '911 Carrera S',
      year: 2023,
      price: 145000,
      mileage: 5200,
      fuelType: 'GASOLINE',
      transmission: 'AUTOMATIC',
      description: 'Ícone eterno de performance e design.',
      images: ['https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800'],
      createdById: admin.id,
    },
    {
      make: 'BMW',
      model: 'M4 Competition',
      year: 2022,
      price: 98000,
      mileage: 12000,
      fuelType: 'GASOLINE',
      transmission: 'AUTOMATIC',
      description: 'A agressividade pura da divisão M.',
      images: ['https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800'],
      createdById: seller.id,
    },
    {
      make: 'Audi',
      model: 'RS e-tron GT',
      year: 2023,
      price: 112000,
      mileage: 2500,
      fuelType: 'ELECTRIC',
      transmission: 'AUTOMATIC',
      description: 'Luxo sustentável e performance eletrizante.',
      images: ['https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=800'],
      createdById: admin.id,
    },
    {
      make: 'Mercedes-Benz',
      model: 'G63 AMG',
      year: 2024,
      price: 215000,
      mileage: 100,
      fuelType: 'GASOLINE',
      transmission: 'AUTOMATIC',
      description: 'Dominância absoluta em qualquer terreno.',
      images: ['https://images.unsplash.com/photo-1520050206274-a1ae446cb3cc?auto=format&fit=crop&q=80&w=800'],
      createdById: seller.id,
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
