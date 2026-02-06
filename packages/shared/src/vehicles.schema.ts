import { z } from 'zod';

export const createVehicleSchema = z.object({
  make: z.string(),
  model: z.string(),
  year: z.number().int().min(1900),
  price: z.number().positive(),
  mileage: z.number().nonnegative(),
  description: z.string().optional(),
  type: z.enum(['SALE', 'RENTAL']),
  images: z.array(z.string()).optional(),
});

export const updateVehicleSchema = createVehicleSchema.partial();

export type CreateVehicleDto = z.infer<typeof createVehicleSchema>;
export type UpdateVehicleDto = z.infer<typeof updateVehicleSchema>;
