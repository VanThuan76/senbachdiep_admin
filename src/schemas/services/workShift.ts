import usePagination from '@/src/shared/hooks/usePagination';
import { IBaseResponse, IBaseResponseWithCount } from '@/src/schemas/types/base';
import { Filter } from '@/src/shared/utils/typeSearchParams';
import { axiosInstance } from '@/src/config/axios';
import { IWorkShifts, IWorkShiftUpdateOrCreate } from '../types/workShift';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/src/shared/components/ui/use-toast';

const QUERY_KEY = 'WorkShiftQuery';
export const useGetListWorkShift = (defaultFilter?: Filter[]) => {
  return usePagination<IBaseResponseWithCount<IWorkShifts[]>>({
    queryKey: [QUERY_KEY, 'get-all'],
    apiFn: params => axiosInstance.post<IBaseResponseWithCount<IWorkShifts[]>>('/erp/work_shift', { ...params }),
    defaultParams: {
      page: 1,
      size: 50,
      filters: defaultFilter,
      sorts: [],
    },
  });
};

export const useCreateWorkShift = (onSuccessHandle?: () => void) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: (body: IWorkShiftUpdateOrCreate) =>
      axiosInstance.post<IBaseResponse<any>>('erp/create_work_shift', body),
    onSuccess: data => {
      if (!data.data) return;
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
      if (onSuccessHandle) onSuccessHandle();
      toast({
        variant: 'success',
        title: 'Đăng ký ca làm việc thành công',
      });
    },
    onError: (err: any) => {
      console.log(err);
      toast({
        variant: 'destructive',
        title: err?.data?.data || 'Đăng ký ca làm việc thất bại',
      });
    },
  });
};
