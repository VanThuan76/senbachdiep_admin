import { axiosInstance } from '@/src/config/axios';
import { useQuery } from '@tanstack/react-query';
import { IBaseResponse } from '../types/base';
import { IBed } from '../types/bed';

export const useGetBed = () => {
  return useQuery({
    queryKey: ['getListBed'],
    queryFn: () => axiosInstance.get<IBaseResponse<IBed[]>>('/erp/beds'),
    select(data) {
      return data.data.map((item: IBed) => ({
        label: item.name,
        value: item.id,
      }));
    },
  });
};
