import * as z from 'zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/src/shared/components/ui/form';
import InputSelect from '@/src/shared/components/custom/form/InputSelect';
import InputDatePicker from '@/src/shared/components/custom/form/InputDatePicker';
import ListButtonForm from '../../../ListButtonForm';
import useFormBeforeUnload from '@/src/shared/hooks/useFormBeforeUnload';
import { IWorkShiftUpdateOrCreate } from '@/src/schemas/types/workShift';
import { useGetBranch } from '@/src/schemas/services/branch';
import { useGetZone } from '@/src/schemas/services/zone';
import { useGetBed } from '@/src/schemas/services/bed';
import InputTime from '@/src/shared/components/custom/form/InputTime';
import { useGetTechnician } from '@/src/schemas/services/technician';

type Props = {
  formSchema: z.Schema<IWorkShiftUpdateOrCreate>;
  onSubmit: (value: Partial<IWorkShiftUpdateOrCreate>) => void;
  isLoading?: boolean;
  defaultValue?: Partial<IWorkShiftUpdateOrCreate>;
  className?: string;
  isCreate?: boolean;
};

export function FormWorkShift({ isCreate = false, formSchema, onSubmit, isLoading, defaultValue, className }: Props) {
  const [initialValues, setInitialValues] = useState<Partial<IWorkShiftUpdateOrCreate>>(defaultValue || {});
  const { data: branches } = useGetBranch();
  const { data: zones } = useGetZone();
  const { data: beds } = useGetBed();
  const { data: technicians } = useGetTechnician();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });
  const resetForm = () => {
    form.reset();
  };
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
        className={`w-full space-y-6 py-8 ${className}`}
      >
        {/* //Form */}
        <div className='flex w-full flex-col items-start justify-start gap-8'>
          <div className='grid w-full grid-cols-1 gap-16 md:grid-cols-2'>
            <InputSelect
              options={branches}
              fieldName='branch_id'
              label='Chi nhánh*'
              form={form}
              placeHolder='Chọn chi nhánh'
            ></InputSelect>
            <InputDatePicker form={form} fieldName='date' label='Ngày thực hiện*' placeHolder='Nhập ngày thực hiện' />
          </div>
          <div className='grid w-full grid-cols-1 gap-16 md:grid-cols-2'>
            <InputSelect
              options={zones}
              fieldName='zone_id'
              label='Khu vực*'
              form={form}
              placeHolder='Chọn khu vực'
              className='col-span-1 w-full'
            ></InputSelect>
            <div className='col-span-1 flex w-full items-center justify-end gap-2'>
              <InputTime form={form} fieldName='from_at' label='Bắt đầu từ*' placeHolder='Nhập bắt đầu từ' />
              <InputTime form={form} fieldName='to_at' label='Kết thúc lúc*' placeHolder='Nhập kết thúc lúc' />
            </div>
          </div>
          <div className='grid w-full grid-cols-1 gap-16 md:grid-cols-2'>
            <InputSelect
              options={beds}
              fieldName='bed_id'
              label='Giường*'
              form={form}
              placeHolder='Chọn giường'
            ></InputSelect>
            <InputSelect
              options={technicians}
              fieldName='employee_id'
              label='Nhân viên*'
              form={form}
              placeHolder='Chọn nhân viên'
            ></InputSelect>
          </div>
        </div>
        {/* //Button */}
        <div className='mb-8 w-full'>
          <ListButtonForm hiddenBtnBack={true} isLoading={isLoading} resetForm={resetForm} />
        </div>
      </form>
    </Form>
  );
}
