import { z } from 'zod';

export const CreateVehicleSchema = z.object({
  make: z.string().min(1),
  model: z.string().min(1),
  year: z.number().int().min(1900).max(new Date().getFullYear() + 1),
  price: z.number().positive(),
  mileage: z.number().nonnegative(),
  fuelType: z.string(),
  transmission: z.string(),
  description: z.string().optional(),
  images: z.array(z.string()).optional(),
  createdById: z.string().uuid(),
});

export type CreateVehicleDto = z.infer<typeof CreateVehicleSchema>;
