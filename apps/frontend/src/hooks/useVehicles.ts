import { useQuery } from '@tanstack/react-query';
import { sdk } from '@/lib/sdk';

export const useVehicles = () => {
  return useQuery({
    queryKey: ['vehicles'],
    queryFn: () => sdk.vehicles.findAll(),
  });
};

export const useVehicle = (id: string) => {
  return useQuery({
    queryKey: ['vehicles', id],
    queryFn: () => sdk.vehicles.findOne(id),
    enabled: !!id,
  });
};
