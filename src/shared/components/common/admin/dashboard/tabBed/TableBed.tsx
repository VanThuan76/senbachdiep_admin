import { IWorkShift, IWorkShifts } from '@/src/schemas/types/workShift';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Folder, Workflow } from 'lucide-react';
import { Tree } from '@/src/shared/components/custom/Tree';
import { formatISO, differenceInMinutes, parse } from 'date-fns';
import {
  determineBedBackgroundColor,
  convertStatusWorkShift,
  determineBedTextColor,
  actionsBed,
} from '@/src/shared/constants/business';
import { Popover, PopoverContent, PopoverTrigger } from '@/src/shared/components/ui/popover';
import LoadingSpinner from '@/src/shared/components/icons/LoadingSpinner';
import { PopoverClose } from '@radix-ui/react-popover';

type Props = {
  TABLE_NAME: string;
  data: IWorkShifts[];
  tableConfig: any;
  getFieldValueOnSearchParam: any;
  isLoading?: boolean;
  className?: string;
};

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
const TableBed = ({ className, TABLE_NAME, data, isLoading, tableConfig, getFieldValueOnSearchParam }: Props) => {
  const [toggleFilter, setToggleFilter] = useState(false);
  const [isAction, setIsAction] = useState(true);
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
          {data.map((item, index) => {
            const currentDateTime = new Date();
            const nearestWorkShift = item.workShifts
              .filter(workShift => {
                const workShiftDate = new Date(workShift.date);
                const currentDateOnly = formatISO(currentDateTime, { representation: 'date' });
                const workShiftDateOnly = formatISO(workShiftDate, { representation: 'date' });
                return workShiftDateOnly === currentDateOnly && workShift;
              })
              .reduce((nearest: any, workShift: IWorkShift) => {
                const workShiftTime = parse(workShift.from_at, 'HH:mm:ss', new Date());
                const timeDifference = differenceInMinutes(workShiftTime, currentDateTime);
                if (nearest === null || Math.abs(timeDifference) < Math.abs(nearest.timeDifference)) {
                  return {
                    workShift,
                    timeDifference,
                  };
                }
                return nearest;
              }, null);
            const nearestWorkShiftArray = nearestWorkShift ? [nearestWorkShift.workShift] : [];
            return (
              <Popover key={index} modal={true}>
                <PopoverTrigger asChild>
                  <div
                    key={index}
                    className={`relative flex h-[150px] w-[350px] cursor-pointer flex-col items-start justify-start gap-2 overflow-hidden rounded-lg border border-[#14130E] p-4 ${determineBedBackgroundColor(
                      nearestWorkShiftArray,
                    )}`}
                  >
                    <div className='flex items-center justify-between'>
                      <div className='flex items-start justify-start gap-1'>
                        <h1 className='text-xl font-medium'>{item.bed.name}</h1>
                      </div>
                    </div>
                    <div className='flex h-full w-full flex-col gap-2 overflow-y-auto'>
                      {nearestWorkShiftArray.map((workShift: IWorkShift) => {
                        return (
                          <div key={workShift.id}>
                            <p className='mb-2 text-xs font-light italic'>
                              SBD000{workShift.employee.id} - {workShift.employee.name} ({workShift.from_at} -{' '}
                              {workShift.to_at})
                            </p>
                            {workShift.work_shift_services?.length > 0 &&
                              workShift.work_shift_services.map(workShiftService => (
                                <p className='text-sm font-light' key={workShiftService.id}>
                                  ({workShift.from_at} - {workShift.to_at}) {workShiftService.service.name}
                                </p>
                              ))}
                            <p
                              className={`absolute right-[45%] top-[15%] text-xs font-normal ${determineBedTextColor(
                                workShift.status,
                              )}`}
                            >
                              {convertStatusWorkShift(workShift.status)}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent className='w-[160px] px-0' align='end'>
                  <div className='flex w-full flex-col items-start justify-start gap-4'>
                    {actionsBed.map(action => (
                      <PopoverClose
                        key={action.id}
                        onClick={e => {}}
                        className='flex w-full cursor-pointer items-center justify-start gap-3 px-3 py-1 hover:bg-[#D9A536] hover:text-accent-foreground'
                      >
                        <div className={'h-[8px] w-[8px] rounded-full bg-[#DFD24C]'}></div>
                        <p className='text-sm font-normal'>{action.label}</p>
                      </PopoverClose>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TableBed;
