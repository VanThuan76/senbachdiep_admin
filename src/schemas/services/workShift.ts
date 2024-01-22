import usePagination from '@/src/shared/hooks/usePagination';
import { IBaseResponseWithCount } from '@/src/schemas/types/base';
import { Filter } from '@/src/shared/utils/typeSearchParams';
import { axiosInstanceNoAuth } from '@/src/config/axios';
import { IWorkShift } from '../types/workShift';

const QUERY_KEY = 'WorkShiftQuery';
export const useGetListWorkShift = (defaultFilter?: Filter[]) => {
  return usePagination<IBaseResponseWithCount<IWorkShift[]>>({
    queryKey: [QUERY_KEY, 'get-all'],
    apiFn: params => axiosInstanceNoAuth.post<IBaseResponseWithCount<IWorkShift[]>>('/erp/work_shift', { ...params }),
    defaultParams: {
      page: 1,
      size: 15,
      filters: defaultFilter,
      sorts: [],
    },
  });
};
