import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent } from "@/components/ui/Card";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="max-w-md w-full">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Entrar no StandPro</h2>
          <form className="space-y-6">
            <Input label="Email" type="email" placeholder="exemplo@email.com" />
            <Input label="Password" type="password" placeholder="********" />
            <Button type="submit" className="w-full">Entrar</Button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            Não tem conta? <a href="/auth/register" className="text-primary font-bold">Registe-se</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
