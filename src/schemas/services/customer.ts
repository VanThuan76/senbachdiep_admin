import usePagination from '@/src/shared/hooks/usePagination';
import { IBaseResponseWithCount } from '@/src/schemas/types/base';
import { ICustomer } from '@/src/schemas/types/customer';
import { Filter } from '@/src/shared/utils/typeSearchParams';
import { axiosInstanceNoAuth } from '@/src/config/axios';

const QUERY_KEY = 'CustomerQuery';
export const useGetListCustomer = (defaultFilter?: Filter[]) => {
  return usePagination<IBaseResponseWithCount<ICustomer[]>>({
    queryKey: [QUERY_KEY, 'get-all'],
    apiFn: params => axiosInstanceNoAuth.post<IBaseResponseWithCount<ICustomer[]>>('/user', { ...params }),
    defaultParams: {
      page: 1,
      size: 15,
      filters: defaultFilter,
      sorts: [{ field: 'id', direction: 'ASC' }],
    },
  });
};
