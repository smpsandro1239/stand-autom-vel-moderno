'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent } from "@/components/ui/Card";
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoadingLogin, isErrorLogin } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="max-w-md w-full">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Entrar no StandPro</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              label="Email"
              type="email"
              placeholder="exemplo@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {isErrorLogin && (
              <p className="text-red-500 text-sm">Email ou password incorretos.</p>
            )}
            <Button type="submit" className="w-full" isLoading={isLoadingLogin}>
              Entrar
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            Não tem conta? <Link href="/auth/register" className="text-primary font-bold">Registe-se</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
