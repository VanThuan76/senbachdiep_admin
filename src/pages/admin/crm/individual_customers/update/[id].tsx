import * as z from 'zod';
import { useRouter } from 'next/router';
import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next/types';
import LayoutAdmin from '@/src/shared/layout/LayoutAdmin';
import { ICustomer, IIndividualCustomerUpdateOrCreate } from '@/src/schemas/types/customer';
import { convertStringDate } from '@/src/shared/utils/functions/convertDay';
import { FormIndividualCustomers } from '@/src/shared/components/common/admin/crm/individual_customers/form/FormIndividualCustomers';
import { useUpdateIndividualCustomer } from '@/src/schemas/services/user';

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

type Props = {
  customer: ICustomer;
};

const UpdateIndividualCustomers = ({ customer }: Props) => {
  const router = useRouter();
  const doUpdateIndividualCustomers = useUpdateIndividualCustomer(customer && customer.id, () =>
    router.push('/admin/crm/individual_customers'),
  );
  if (!customer) return <></>;
  const defaultValues: IIndividualCustomerUpdateOrCreate = {
    full_name: customer.full_name,
    phone_number: customer.phone_number,
    email: customer.email,
    national: customer?.national,
    province_city: customer?.province_city,
    district: customer?.district,
    wards: customer?.wards,
    birthday: customer?.birthday,
    gender: Number(customer?.gender),
    address: customer?.address,
    note: customer?.note,
    customer_type: customer.customer_type,
    branch_id: customer?.personal_branch.id,
    person_in_charge: customer?.personal_technician.id,
    campaign_id: customer?.campaign_id,
    customer_resources: customer?.customer_resources,
    presenter_id: customer?.presenter_id,
    caring_service_id: customer?.caring_service_id,
  };
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
      doUpdateIndividualCustomers.mutate(bodyRequest);
    } else {
      console.error('Thiếu giá trị trong form cập nhật');
    }
  }
  return (
    <React.Fragment>
      <div className='mx-auto flex w-full flex-col items-start justify-start'>
        <FormIndividualCustomers formSchema={formSchema} onSubmit={onSubmit} defaultValue={defaultValues} />
      </div>
    </React.Fragment>
  );
};
UpdateIndividualCustomers.getLayout = (children: React.ReactNode) => <LayoutAdmin>{children}</LayoutAdmin>;
export default UpdateIndividualCustomers;

export const getStaticProps: GetStaticProps = async ctx => {
  const id = ctx.params?.id;
  if (id) {
    try {
      const responseIndividualCustomers = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/erp/user/${id}`);
      if (!responseIndividualCustomers.ok) {
        throw new Error('Failed to fetch Customer data');
      }
      const data = await responseIndividualCustomers.json();
      const customer = data.data;
      return {
        props: {
          customer,
        },
      };
    } catch (error) {
      return {
        props: {
          customer: null,
          error: 'Failed to fetch Customer data',
        },
      };
    }
  } else {
    return {
      props: {},
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async _ctx => {
  return {
    paths: [],
    fallback: true,
  };
};
