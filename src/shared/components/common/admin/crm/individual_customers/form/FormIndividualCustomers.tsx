import * as z from 'zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/src/shared/components/ui/form';
import InputSelect from '@/src/shared/components/custom/form/InputSelect';
import InputDatePicker from '@/src/shared/components/custom/form/InputDatePicker';
import InputText from '@/src/shared/components/custom/form/InputText';
import { IIndividualCustomerUpdateOrCreate } from '@/src/schemas/types/customer';
import { optionsGender } from '@/src/shared/constants/form/options';
import HeadPage from '@/src/shared/components/common/HeadPage';
import ListButtonForm from '../../../ListButtonForm';
import useFormBeforeUnload from '@/src/shared/hooks/useFormBeforeUnload';
import useLocationForm from '@/src/shared/hooks/useLocation';

type Props = {
  formSchema: z.Schema<IIndividualCustomerUpdateOrCreate>;
  onSubmit: (value: Partial<IIndividualCustomerUpdateOrCreate>) => void;
  isLoading?: boolean;
  defaultValue?: Partial<IIndividualCustomerUpdateOrCreate>;
  className?: string;
  isCreate?: boolean;
};

export function FormIndividualCustomers({
  isCreate = false,
  formSchema,
  onSubmit,
  isLoading,
  defaultValue,
  className,
}: Props) {
  const [initialValues, setInitialValues] = useState<Partial<IIndividualCustomerUpdateOrCreate>>(defaultValue || {});
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });
  const resetForm = () => {
    form.reset();
  };
  const { FormLocation } = useLocationForm({ form });
  useFormBeforeUnload(form);
  useEffect(() => {
    if (defaultValue) {
      setInitialValues(defaultValue);
      for (const [key, value] of Object.entries(defaultValue)) {
        form.setValue(key as any, value, {
          // shouldValidate: true,
          shouldDirty: true,
        });
      }
    }
  }, [defaultValue, form]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        onError={e => {
          new Error(`Error ${e}`);
        }}
        className={`w-full space-y-6 ${className}`}
      >
        <div className='mb-8 grid w-full grid-cols-1 items-center justify-between md:grid-cols-4'>
          {/* //Head Form */}
          <HeadPage
            title='Tạo khách hàng cá nhân'
            breadcrumbs={[
              { title: 'CRM', url: '#' },
              { title: 'Khách hàng cá nhân', url: '/admin/crm/individual_customers' },
              { title: 'Tạo khách hàng cá nhân', url: '/admin/crm/individual_customers/create' },
            ]}
            isCreate={false}
            className='col-span-3 w-full font-semibold'
          />
          {/* //Button */}
          <ListButtonForm isLoading={isLoading} resetForm={resetForm} />
        </div>
        {/* //Form */}
        <p className='text-xl font-medium'>Thông tin cơ bản</p>
        <div className='flex w-full flex-col items-start justify-start gap-8'>
          <div className='grid w-full grid-cols-1 gap-16 md:grid-cols-4'>
            <InputText form={form} fieldName='full_name' label='Tên khách hàng*' placeHolder='Nhập tên khách hàng' />
            <InputText form={form} fieldName='phone_number' label='Điện thoại 1*' placeHolder='Nhập số điện thoại 1' />
            <InputText form={form} fieldName='phone_number_2' label='Điện thoại 2' placeHolder='Nhập số điện thoại 2' />
            <InputText form={form} fieldName='email' label='Email*' placeHolder='Nhập email khách hàng' />
          </div>
          {FormLocation()}
          <div className='grid w-full grid-cols-1 gap-16 md:grid-cols-4'>
            <InputDatePicker form={form} fieldName='birthday' label='Ngày sinh' placeHolder='Nhập ngày sinh' />
            <InputSelect
              options={optionsGender}
              fieldName='gender'
              label='Giới tính'
              form={form}
              placeHolder='Chọn giới tính khách hàng'
            ></InputSelect>
            <InputText
              className='w-full grid-cols-1 md:grid-cols-2'
              form={form}
              fieldName='address'
              label='Địa chỉ chi tiết'
              placeHolder='Nhập địa chỉ chi tiết'
            />
          </div>
          <InputText className='w-full' form={form} fieldName='note' label='Ghi chú' placeHolder='Nhập ghi chú' />
        </div>
        {/* //Form-Other */}
        <p className='text-xl font-medium'>Thông tin mở rộng</p>
        <div className='flex w-full flex-col items-start justify-start gap-8'>
          <div className='grid w-full grid-cols-1 gap-16 md:grid-cols-4'>
            <InputSelect
              options={[]}
              fieldName='customer_type'
              label='Nhóm khách hàng*'
              form={form}
              placeHolder='Chọn nhóm khách hàng'
            ></InputSelect>
            <InputSelect
              options={[]}
              fieldName='branch_id'
              label='Chi nhánh chăm sóc'
              form={form}
              placeHolder='Chọn chi nhánh chăm sóc'
            ></InputSelect>
            <InputSelect
              options={[]}
              fieldName='person_in_charge'
              label='Người phụ trách'
              form={form}
              placeHolder='Chọn đối tượng'
            ></InputSelect>
          </div>
          <div className='grid w-full grid-cols-1 gap-16 md:grid-cols-4'>
            <InputSelect
              options={[]}
              fieldName='campaign_id'
              label='Chiến dịch'
              form={form}
              placeHolder='Chọn chiến dịch'
            ></InputSelect>
            <InputSelect
              options={[]}
              fieldName='customer_resources'
              label='Nguồn khách hàng'
              form={form}
              placeHolder='Chọn nguồn khách hàng'
            ></InputSelect>
            <InputSelect
              options={[]}
              fieldName='presenter_id'
              label='Người giới thiệu'
              form={form}
              placeHolder='Chọn đối tượng'
            ></InputSelect>
          </div>
          <InputSelect
            className='w-full'
            options={[]}
            fieldName='caring_service_id'
            label='Dịch vụ quan tâm'
            form={form}
            placeHolder='Chọn dịch vụ quan tâm'
          ></InputSelect>
        </div>
      </form>
    </Form>
  );
}
