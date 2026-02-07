import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  const mockPrismaService = {
    $connect: jest.fn(),
    $disconnect: jest.fn(),
    user: {
      findUnique: jest.fn(),
    },
    session: {
      create: jest.fn(),
    }
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(PrismaService)
      .useValue(mockPrismaService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/auth/login (POST) - failure', () => {
    mockPrismaService.user.findUnique.mockResolvedValue(null);
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'wrong@test.com', password: 'password' })
      .expect(201) // Nest returns 201 for POST by default
      .expect((res) => {
        expect(res.body.message).toEqual('Invalid credentials');
      });
  });
});
