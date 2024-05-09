import { axiosInstance } from '@/src/config/axios';
import { useQuery } from '@tanstack/react-query';
import { IBaseResponse } from '../types/base';
import { IBranches } from '../types/branch';

export const useGetBranch = () => {
  // #Todo API Query Mobile
  return useQuery({
    queryKey: ['getListBranch'],
    queryFn: () => axiosInstance.get<IBaseResponse<IBranches>>('/erp/branches'),
    select(data) {
      return data.data.branches.map(item => ({
        label: item.name,
        value: item.id,
      }));
    },
  });
};
