'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, token } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!token || !user) {
      router.push('/auth/login');
    }
  }, [token, user, router]);

  if (!token || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">A redirecionar...</p>
      </div>
    );
  }

  return <>{children}</>;
}
