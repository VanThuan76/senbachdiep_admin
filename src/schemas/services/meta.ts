import { axiosPartnerProvince } from '@/src/config/axios';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { IDistricts, IProvinceOrCity, IWards } from '../types/metaData';

export const useGetProvinces = () => {
  return useQuery({
    queryKey: ['getListProvince'],
    queryFn: () => axiosPartnerProvince.get<IProvinceOrCity[]>('/api/'),
    select(data) {
      return data.map(item => ({
        label: item.name,
        value: item.name,
      }));
    },
  });
};
export const useGetDistricts = (provinceName: string | undefined, options?: UseQueryOptions) => {
  return useQuery({
    queryKey: ['useGetDistricts', provinceName],
    queryFn: () => axiosPartnerProvince.get<IDistricts[]>(`/api/d/search/?q=${provinceName}`),
    select(data) {
      return data.map(item => ({
        value: item.name,
        label: item.name,
      }));
    },
    enabled: options?.enabled,
  });
};
export const useGetWards = (
  provinceId: number | undefined,
  districtName: string | undefined,
  options?: UseQueryOptions,
) => {
  return useQuery({
    queryKey: ['useGetWard', provinceId, districtName],
    queryFn: () => axiosPartnerProvince.get<IWards[]>(`/api/w/search/?q=${districtName}`),
    select(data) {
      return data.map(item => ({
        value: item.code,
        label: item.name,
      }));
    },
    enabled: options?.enabled,
  });
};
