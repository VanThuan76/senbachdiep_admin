import { axiosInstance } from '@/src/config/axios';
import { useToast } from '@/src/shared/components/ui/use-toast';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { IBaseResponse } from '../types/base';
import { setCookie } from 'cookies-next';
import { APP_SAVE_KEY } from '@/src/shared/constants/main';
import { ILoginedUser, IProfileUser } from '../types/user';
import { login } from '@/src/shared/stores/appSlice';
import { IIndividualCustomerUpdateOrCreate } from '../types/customer';

const QUERY_KEY = 'user';
export const useLogin = () => {
  const router = useRouter();
  const { toast } = useToast();
  return useMutation({
    mutationFn: (User: { username: string; password: string }) =>
      axiosInstance.post<IBaseResponse<ILoginedUser>>('/erp/login', User),
    onSuccess: data => {
      if (!data.data.access_token) return;
      setCookie(APP_SAVE_KEY.TOKEN_KEY, data.data.access_token);
      toast({
        variant: 'success',
        title: 'Đăng nhập thành công',
        description: 'Chào mừng bạn đăng nhập vào hệ thống',
      });
      router.push('/admin/crm/individual_customers');
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

export const useGetUserByAuth = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  return useQuery({
    queryKey: [QUERY_KEY, 'get-user-auth'],
    queryFn: () => axiosInstance.get<IBaseResponse<IProfileUser>>(`/erp/profile`),
    onSuccess(data) {
      if (data.data) {
        dispatch(login(data.data));
      } else {
        router.push('/login');
      }
    },
  });
};

export const useCreateIndividualCustomer = (onSuccessHandle?: () => void) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: (body: IIndividualCustomerUpdateOrCreate) =>
      axiosInstance.post<IBaseResponse<any>>('erp/create_user', body),
    onSuccess: data => {
      if (!data.data) return;
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
      if (onSuccessHandle) onSuccessHandle();
      toast({
        variant: 'success',
        title: 'Đăng ký khách hàng thành công',
      });
    },
    onError: (err: any) => {
      console.log(err);
      toast({
        variant: 'destructive',
        title: err?.data?.data || 'Đăng ký khách hàng thất bại',
      });
    },
  });
};
