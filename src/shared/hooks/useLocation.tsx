import React from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';
import { useGetProvinces, useGetDistricts, useGetWards } from '@/src/schemas/services/meta';
import InputSelect from '@/src/shared/components/custom/form/InputSelect';

type Props = {
  form: UseFormReturn<any>;
  provinceKeyName?: string;
  districtKeyName?: string;
  initProvince?: number;
  initDistrict?: number;
};

const useLocationForm = ({ form, provinceKeyName, districtKeyName, initProvince, initDistrict }: Props) => {
  const provinceId = useWatch({ name: provinceKeyName || 'province_city', control: form.control });
  const districtId = useWatch({ name: districtKeyName || 'district', control: form.control });
  const { data: provinceCities } = useGetProvinces();
  const { data: districts } = useGetDistricts(provinceId || initProvince, {
    enabled: !!provinceId || !!initProvince,
  });
  const { data: wards } = useGetWards(provinceId || initProvince, districtId || initDistrict, {
    enabled: !!districtId || (!!initDistrict && !!provinceId) || !!initProvince,
  });

  const FormLocation = () => {
    return (
      <div className='grid w-full grid-cols-1 gap-16 md:grid-cols-4'>
        <InputSelect
          options={[{ value: 'Việt Nam', label: 'Việt Nam' }]}
          fieldName='national'
          label='Quốc gia'
          form={form}
          placeHolder='Chọn quốc gia'
        ></InputSelect>
        <InputSelect
          options={provinceCities}
          fieldName='province_city'
          label='Tỉnh/Thành phố'
          form={form}
          placeHolder='Chọn tỉnh/thành phố'
        ></InputSelect>
        <InputSelect
          options={districts}
          fieldName='district'
          label='Quận/Huyện'
          form={form}
          placeHolder='Chọn quận/huyện'
        ></InputSelect>
        <InputSelect
          options={wards}
          fieldName='wards'
          label='Xã/Phường'
          form={form}
          placeHolder='Chọn xã/phường'
        ></InputSelect>
      </div>
    );
  };

  return { FormLocation };
};

export default useLocationForm;
