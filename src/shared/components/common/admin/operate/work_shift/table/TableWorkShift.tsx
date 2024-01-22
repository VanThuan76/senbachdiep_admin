import { IWorkShifts, IWorkShiftUpdateOrCreate } from '@/src/schemas/types/workShift';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Folder, Plus, Workflow } from 'lucide-react';
import { Tree } from '@/src/shared/components/custom/Tree';
import { ConfirmDialog } from '@/src/shared/components/custom/ConfirmDialog';
import { FormWorkShift } from '@/src/shared/components/common/admin/operate/work_shift/form/FormWorkShift';
import { z } from 'zod';
import { useCreateWorkShift } from '@/src/schemas/services/workShift';
import LoadingSpinner from '@/src/shared/components/icons/LoadingSpinner';

type Props = {
  TABLE_NAME: string;
  data: IWorkShifts[];
  tableConfig: any;
  getFieldValueOnSearchParam: any;
  className?: string;
  isLoading?: boolean;
};

const formSchema = z.object({
  branch_id: z.number({ required_error: 'Vui lòng chọn chi nhánh' }).min(1, { message: 'Vui lòng chọn chi nhánh' }),
  date: z.date({ required_error: 'Vui lòng nhập ngày' }),
  from_at: z.string({ required_error: 'Vui lòng nhập thời gian bắt đầu' }),
  to_at: z.string({ required_error: 'Vui lòng nhập thời gian kết thúc' }),
  zone_id: z.number({ required_error: 'Vui lòng chọn khu' }).min(1, { message: 'Vui lòng chọn khu' }),
  bed_id: z.number({ required_error: 'Vui lòng chọn giường' }).min(1, { message: 'Vui lòng chọn giường' }),
  employee_id: z.number({ required_error: 'Vui lòng chọn nhân viên' }).min(1, { message: 'Vui lòng chọn nhân viên' }),
});

const fakeData = [
  {
    id: '1',
    name: 'CN Time City',
    parent: true,
    children: [
      {
        id: '1.1',
        name: 'Khu đơn',
      },
    ],
  },
];
const TableWorkShift = ({ isLoading, className, TABLE_NAME, data, tableConfig, getFieldValueOnSearchParam }: Props) => {
  const [toggleFilter, setToggleFilter] = useState(false);
  const [defaultValues, setDefaultValues] = useState({ branch_id: 0, zone_id: 0, bed_id: 0 });
  const doCreate = useCreateWorkShift();
  function onSubmit(value: Partial<IWorkShiftUpdateOrCreate>) {
    if (
      value.branch_id &&
      value.date &&
      value.zone_id &&
      value.bed_id &&
      value.employee_id &&
      value.from_at &&
      value.to_at
    ) {
      const bodyRequest = {
        branch_id: value.branch_id,
        date: value.date,
        from_at: value.from_at,
        to_at: value.to_at,
        zone_id: value.zone_id,
        bed_id: value.bed_id,
        employee_id: value?.employee_id,
      };
      doCreate.mutate(bodyRequest);
    } else {
      console.error('Thiếu giá trị trong form');
    }
  }
  return (
    <div
      className={`grid w-full grid-cols-1 items-start justify-between gap-8 overflow-hidden md:grid-cols-23 ${className}`}
    >
      {/* //TimelineFilter */}
      {!toggleFilter ? (
        <div
          className='h-[56px] w-[56px] cursor-pointer border border-[#DFD24C] p-4 shadow-md md:col-span-2'
          onClick={() => setToggleFilter(!toggleFilter)}
        >
          <ChevronRight className='text-center' />
        </div>
      ) : (
        <div className='flex w-full flex-col items-start justify-start gap-3 overflow-hidden border border-[#DFD24C] p-4 shadow-md md:col-span-5'>
          <div className='flex w-full items-center justify-between'>
            <h1>Chọn vị trí</h1>
            <ChevronLeft className='cursor-pointer' onClick={() => setToggleFilter(!toggleFilter)} />
          </div>
          <Tree
            data={fakeData}
            className='h-[460px] w-[200px] flex-shrink-0'
            initialSlelectedItemId='f12'
            folderIcon={Folder}
            itemIcon={Workflow}
          />
        </div>
      )}
      {/* //TimelineGird */}
      {isLoading ? (
        <div className='flex h-full w-full items-center justify-center'>
          <LoadingSpinner />
        </div>
      ) : (
        <div className={`flex w-full flex-wrap gap-8 ${!toggleFilter ? 'md:col-span-20' : 'md:col-span-18'}`}>
          {data.map((item, index) => (
            <div
              key={index}
              className='relative h-[150px] w-[350px] overflow-hidden rounded-lg border border-[#14130E] p-4'
            >
              <p className='mb-3 text-xl font-medium'>{item.bed.name}</p>
              <div className='flex h-full w-full flex-col gap-2 overflow-y-scroll'>
                {item.workShifts.map(workShift => (
                  <ConfirmDialog
                    className='min-w-[800px]'
                    triggerCpn={
                      <p key={workShift.id} className='cursor-pointer border-b border-[#C9C9C9] text-sm'>
                        {workShift.from_at} - {workShift.to_at} - {workShift.employee.name}
                      </p>
                    }
                    onOk={() => {}}
                    title='Chỉnh sửa ca làm việc'
                    visibleBtn={true}
                    content={
                      <FormWorkShift
                        isCreate={true}
                        defaultValue={{
                          ...defaultValues,
                          date: new Date(workShift.date),
                          from_at: workShift.from_at,
                          to_at: workShift.to_at,
                          employee_id: workShift.employee.id,
                        }}
                        formSchema={formSchema}
                        onSubmit={onSubmit}
                      />
                    }
                  />
                ))}
              </div>
              <ConfirmDialog
                className='min-w-[800px]'
                triggerCpn={
                  <Plus
                    className='absolute right-2 top-2 cursor-pointer'
                    onClick={() =>
                      setDefaultValues({
                        bed_id: item.bed.id,
                        branch_id: item.bed.branch.id,
                        zone_id: item.bed.zone.id,
                      })
                    }
                  />
                }
                onOk={() => {}}
                title='Thêm ca làm việc'
                visibleBtn={true}
                content={
                  <FormWorkShift
                    isCreate={true}
                    defaultValue={defaultValues}
                    formSchema={formSchema}
                    onSubmit={onSubmit}
                  />
                }
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TableWorkShift;
