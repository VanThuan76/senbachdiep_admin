import { timeLineWorkShifts } from '@/src/shared/constants/business';
import { calculationTimeLine } from '@/src/shared/utils/business/calculationTimeLine';
import React from 'react';
import { cn } from '@/src/shared/utils/tailwindPlugin';

const fakeData = {
  data: {
    branch: 1,
    zone: {
      single: [
        {
          room_1: [
            {
              id: 0,
              staff: 'Phạm Thị Thu Uyên',
              from_at: '07:00',
              to_at: '12:00',
              status: 0,
            },
            {
              id: 1,
              staff: 'Phạm Thị Thu Uyên',
              from_at: '12:00',
              to_at: '16:00',
              status: 0,
            },
          ],
        },
        {
          room_2: [],
        },
      ],
      female: {},
      male: {},
    },
  },
};
const TimeLineWorkShift = () => {
  let accumulatedWidth = 0;
  const widths: any[] = [];
  return (
    <div className='grid w-full grid-cols-1 items-start justify-between gap-8 overflow-hidden md:grid-cols-23'>
      <div className='w-full border border-[#DFD24C] p-4 md:col-span-5'></div>
      <div className='w-full overflow-x-scroll md:col-span-18'>
        <div className='mt-4 flex flex-col items-start justify-start gap-8'>
          <div className='ml-20 flex h-full w-[1206px] items-center justify-start'>
            {timeLineWorkShifts.map(time => (
              <p key={time} className='!w-[67px] text-center'>
                {time}
              </p>
            ))}
          </div>
          {fakeData.data.zone.single.map((item: { [key: string]: any }, index: number) => (
            <div key={index} className='border-b-bg-[#FCFCFC] min-w-screen flex items-center justify-start border-b'>
              <div className='min-w-[60px] rounded-md bg-[#D9A536] px-2 py-4 text-center'>D0{index + 1}</div>
              <div className='min-w-screen ml-5 flex items-center justify-start gap-2 overflow-hidden'>
                {(
                  (item[`room_${index + 1}`] as {
                    id: number;
                    staff: string;
                    from_at: string;
                    to_at: string;
                    status: number;
                  }[]) || []
                ).map((child, childIndex) => {
                  const titleDefault = `${child.id} - ${child.staff} (${child.from_at} - ${child.to_at})`;
                  const dynamicWidth = 60 * calculationTimeLine(child.to_at) - accumulatedWidth;
                  accumulatedWidth += dynamicWidth;
                  widths.push(dynamicWidth);
                  return (
                    <div
                      key={childIndex}
                      className={cn('rounded-md border-2 border-solid border-[#C9C9C9] px-2 py-4 text-center')}
                      style={{ width: dynamicWidth + 'px' }}
                    >
                      {dynamicWidth < 250 ? `${child.id} - ${child.staff}...` : titleDefault}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLineWorkShift;
