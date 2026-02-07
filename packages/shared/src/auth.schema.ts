import { z } from 'zod';

export enum Role {
  ADMIN = 'ADMIN',
  SELLER = 'SELLER',
  USER = 'USER',
}

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
  role: z.nativeEnum(Role).optional(),
});

export type LoginDto = z.infer<typeof loginSchema>;
export type RegisterDto = z.infer<typeof registerSchema>;
