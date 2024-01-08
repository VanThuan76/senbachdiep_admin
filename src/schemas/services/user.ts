import { axiosInstance } from '@/src/config/axios';
import { useToast } from '@/src/shared/components/ui/use-toast';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { IBaseResponse } from '../types/base';
import { setCookie } from 'cookies-next';
import { APP_SAVE_KEY } from '@/src/shared/constants/main';
import { ILoginedUser } from '../types/user';
import { login } from '@/src/shared/stores/appSlice';

export const useLogin = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { toast } = useToast();
  return useMutation({
    mutationFn: (User: { username: string; password: string }) =>
      axiosInstance.post<IBaseResponse<ILoginedUser>>('/auth/login', User),
    onSuccess: data => {
      if (!data.data.token) return;
      setCookie(APP_SAVE_KEY.TOKEN_KEY, data.data.token);
      dispatch(login(data.data.user));
      toast({
        variant: 'success',
        title: 'Đăng nhập thành công',
        description: 'Chào mừng bạn đăng nhập vào hệ thống',
      });
      router.push('/');
    },
    onError(error, variables, context) {
      toast({
        variant: 'destructive',
        title: 'Đăng nhập thất bại',
        description: 'Vui lòng kiểm tra lại thông tin đăng nhập và mật khẩu',
      });
      console.log(error);
    },
  });
};
