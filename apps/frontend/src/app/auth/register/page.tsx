'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent } from "@/components/ui/Card";
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import { Role } from '@stand/shared';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register, isLoadingRegister, isErrorRegister } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    register({ name, email, password, role: Role.USER });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="max-w-md w-full">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Criar Conta</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              label="Nome"
              type="text"
              placeholder="O seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
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
            {isErrorRegister && (
              <p className="text-red-500 text-sm">Ocorreu um erro ao criar a conta.</p>
            )}
            <Button type="submit" className="w-full" isLoading={isLoadingRegister}>
              Registar
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            Já tem conta? <Link href="/auth/login" className="text-primary font-bold">Entre aqui</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
