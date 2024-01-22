import { axiosInstance } from '@/src/config/axios';
import { useQuery } from '@tanstack/react-query';
import { IBaseResponse } from '../types/base';
import { IZone } from '../types/zone';

export const useGetZone = () => {
  return useQuery({
    queryKey: ['getListZone'],
    queryFn: () => axiosInstance.get<IBaseResponse<IZone[]>>('/erp/zones'),
    select(data) {
      return data.data.map((item: IZone) => ({
        label: item.name,
        value: item.id,
      }));
    },
  });
};
