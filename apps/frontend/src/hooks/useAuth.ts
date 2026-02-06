import { useMutation } from '@tanstack/react-query';
import { sdk } from '@/lib/sdk';
import { useAuthStore } from '@/store/authStore';
import { LoginDto, RegisterDto } from '@stand/shared';
import { useRouter } from 'next/navigation';

export function useAuth() {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);
  const logoutStore = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);

  const loginMutation = useMutation({
    mutationFn: async (data: LoginDto) => {
      const response = await sdk.auth.login(data);
      return response;
    },
    onSuccess: (data) => {
      setAuth(data.user, data.accessToken, data.refreshToken);
      sdk.setToken(data.accessToken);
      router.push('/dashboard');
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (data: RegisterDto) => {
      const response = await sdk.auth.register(data);
      return response;
    },
    onSuccess: (data) => {
      setAuth(data.user, data.accessToken, data.refreshToken);
      sdk.setToken(data.accessToken);
      router.push('/dashboard');
    },
  });

  const logout = () => {
    logoutStore();
    sdk.setToken('');
    router.push('/login');
  };

  return {
    user,
    token,
    login: loginMutation.mutate,
    isLoadingLogin: loginMutation.isPending,
    isErrorLogin: loginMutation.isError,
    register: registerMutation.mutate,
    isLoadingRegister: registerMutation.isPending,
    isErrorRegister: registerMutation.isError,
    logout,
  };
}
