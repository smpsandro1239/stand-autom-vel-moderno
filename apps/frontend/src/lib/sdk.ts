import { StandSDK } from '@stand/sdk';

const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const sdk = new StandSDK({
  baseURL,
});

// Helper to set token from storage if available
if (typeof window !== 'undefined') {
  const token = localStorage.getItem('access_token');
  if (token) {
    sdk.setToken(token);
  }
}
