import { z } from 'zod';

export const createLeadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(5),
  vehicleId: z.string().uuid(),
});

export const createRentalSchema = z.object({
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
  vehicleId: z.string().uuid(),
  userId: z.string().uuid(),
});

export type CreateLeadDto = z.infer<typeof createLeadSchema>;
export type CreateRentalDto = z.infer<typeof createRentalSchema>;
