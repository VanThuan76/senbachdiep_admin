import { axiosInstance } from '@/src/config/axios';
import { useQuery } from '@tanstack/react-query';
import { IBaseResponse } from '../types/base';
import { ITechnician } from '../types/technician';

export const useGetTechnician = () => {
  return useQuery({
    queryKey: ['getListTechnician'],
    queryFn: () => axiosInstance.get<IBaseResponse<ITechnician[]>>('/erp/technicians'),
    select(data) {
      return data.data.map((item: ITechnician) => ({
        label: item.name,
        value: item.id,
      }));
    },
  });
};
