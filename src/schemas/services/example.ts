import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { IBaseResponse } from '@/src/schemas/types/base';
import { axiosInstanceNoAuth } from '@/src/config/axios';
import { useToast } from '@/src/shared/components/ui/use-toast';

const QUERY_KEY = 'Example';
/**
 *  @mutation which are GET API
 * */
export const getExample = (options?: Partial<any>) => {
  return useQuery({
    queryKey: [QUERY_KEY, 'get-all'],
    queryFn: () => axiosInstanceNoAuth.get<IBaseResponse<any[]>>('/example'),
    select(data) {
      return data.data;
    },
    enabled: options?.enabled,
  });
};
/**
 *  @mutation which are POST,PATCH,PUT API
 * */
export const newExample = (onSuccessHandle?: () => void) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: (body: any) => axiosInstanceNoAuth.post<IBaseResponse<any>>('/example', body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
      if (onSuccessHandle) onSuccessHandle();
      toast({
        variant: 'success',
        title: 'example',
      });
    },
    onError: (err: any) => {
      const errorMessages = err?.response?.data.errors;
      const firstKey = Object.keys(errorMessages)[0];
      const firstValue = errorMessages[firstKey][0];
      toast({
        variant: 'destructive',
        title: firstValue || 'example',
      });
    },
  });
};
