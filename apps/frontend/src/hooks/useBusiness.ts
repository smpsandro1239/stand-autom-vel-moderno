import { useQuery } from '@tanstack/react-query';
import { sdk } from '@/lib/sdk';

export const useLeads = () => {
  return useQuery({
    queryKey: ['leads'],
    queryFn: () => sdk.leads.findAll(),
  });
};

export const useRentals = () => {
  return useQuery({
    queryKey: ['rentals'],
    queryFn: () => sdk.rentals.findAll(),
  });
};
