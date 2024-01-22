import { useCreateIndividualCustomer } from '@/src/schemas/services/user';
import { IIndividualCustomerUpdateOrCreate } from '@/src/schemas/types/customer';
import { FormIndividualCustomers } from '@/src/shared/components/common/admin/crm/individual_customers/form/FormIndividualCustomers';
import LayoutAdmin from '@/src/shared/layout/LayoutAdmin';
import { convertStringDate } from '@/src/shared/utils/functions/convertDay';
import { z } from 'zod';

const formSchema = z.object({
  full_name: z
    .string({ required_error: 'Vui lòng nhập họ tên khách hàng' })
    .min(1, { message: 'Vui lòng nhập họ tên khách hàng' }),
  phone_number: z
    .string({ required_error: 'Vui lòng nhập số điện thoại khách hàng' })
    .min(1, { message: 'Vui lòng nhập số điện thoại khách hàng' }),
  email: z.string({ required_error: 'Vui lòng nhập email khách hàng' }),
  national: z.string(),
  province_country: z.string(),
  district: z.string(),
  wards: z.string(),
  birthday: z.string(),
  gender: z.number(),
  address: z.string(),
  note: z.string(),
  customer_type: z.number({ required_error: 'Vui lòng nhập nhóm khách hàng' }),
  branch_id: z.number(),
  person_in_charge: z.number(),
  campaign_id: z.number(),
  customer_resources: z.number(),
  presenter_id: z.number(),
  caring_service_id: z.array(z.string()),
});
const CreateIndividualCustomers = () => {
  const doCreate = useCreateIndividualCustomer();
  function onSubmit(value: Partial<IIndividualCustomerUpdateOrCreate>) {
    if (value.full_name && value.phone_number && value.email && value.customer_type) {
      const dateOfBirth = convertStringDate(value?.birthday as unknown as string);
      const bodyRequest = {
        full_name: value.full_name,
        phone_number: value.phone_number,
        email: value.email,
        national: value?.national,
        province_city: value?.province_city,
        district: value?.district,
        wards: value?.wards,
        birthday: dateOfBirth,
        gender: value?.gender,
        address: value?.address,
        note: value?.note,
        customer_type: value.customer_type,
        branch_id: value?.branch_id,
        person_in_charge: value?.person_in_charge,
        campaign_id: value?.campaign_id,
        customer_resources: value?.customer_resources,
        presenter_id: value?.presenter_id,
        caring_service_id: value?.caring_service_id,
      };
      doCreate.mutate(bodyRequest);
    } else {
      console.error('Thiếu giá trị trong form');
    }
  }
  return (
    <div className='mx-auto flex w-full flex-col items-start justify-start'>
      <FormIndividualCustomers isCreate={true} formSchema={formSchema} onSubmit={onSubmit} />
    </div>
  );
};
CreateIndividualCustomers.getLayout = (children: React.ReactNode) => <LayoutAdmin>{children}</LayoutAdmin>;
export default CreateIndividualCustomers;
