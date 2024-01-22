import { timeLineWorkShifts } from '@/src/shared/constants/business';
import { calculationTimeLine } from '@/src/shared/utils/business/calculationTimeLine';
import React, { useState } from 'react';
import { cn } from '@/src/shared/utils/tailwindPlugin';
import { ChevronLeft, ChevronRight, Folder, Workflow } from 'lucide-react';
import { Tree } from '@/src/shared/components/custom/Tree';

const fakeData = {
  data: {
    branch: 1,
    zone: {
      single: [
        {
          room_1: [
            {
              id: 1,
              parent: 'room_1',
              staff: 'Phạm Thị Thu Uyên',
              from_at: '07:00',
              to_at: '12:00',
              status: 0,
            },
            {
              id: 2,
              parent: 'room_1',
              staff: 'Phạm Thị Thu Uyên',
              from_at: '12:00',
              to_at: '16:00',
              status: 0,
            },
          ],
        },
        {
          room_2: [
            {
              id: 1,
              parent: 'room_2',
              staff: 'Phạm Thị Thu Uyên',
              from_at: '08:00',
              to_at: '13:00',
              status: 0,
            },
          ],
        },
      ],
      female: {},
      male: {},
    },
  },
};
const data = [
  {
    id: '1',
    name: 'CN Time City',
    parent: true,
    children: [
      {
        id: '1.1',
        name: 'Khu đơn',
        children: [
          {
            id: '1.2',
            name: 'Phòng D1',
          },
          {
            id: '1.3',
            name: 'Phòng D2',
          },
        ],
      },
    ],
  },
];
const TimeLineWorkShift = () => {
  const [toggleFilter, setToggleFilter] = useState(false);
  let accumulatedWidth = 0;
  const widths: any[] = [];
  return (
    <div className='grid w-full grid-cols-1 items-start justify-between gap-8 overflow-hidden md:grid-cols-23'>
      {/* //TimelineFilter */}
      <div className='w-full md:col-span-5'>
        {!toggleFilter ? (
          <div
            className='h-[56px] w-[56px] cursor-pointer border border-[#DFD24C] p-4 shadow-md'
            onClick={() => setToggleFilter(!toggleFilter)}
          >
            <ChevronRight className='text-center' />
          </div>
        ) : (
          <div className='flex w-full flex-col items-start justify-start gap-3 overflow-hidden border border-[#DFD24C] p-4 shadow-md'>
            <div className='flex w-full items-center justify-between'>
              <h1>Chọn vị trí</h1>
              <ChevronLeft className='cursor-pointer' onClick={() => setToggleFilter(!toggleFilter)} />
            </div>
            <Tree
              data={data}
              className='h-[460px] w-[200px] flex-shrink-0'
              initialSlelectedItemId='f12'
              folderIcon={Folder}
              itemIcon={Workflow}
            />
          </div>
        )}
      </div>
      {/* //TimelineGird */}
      <div className='w-full overflow-x-scroll md:col-span-18'>
        <div className='flex flex-col items-start justify-start gap-8'>
          <div className='ml-20 flex h-full w-[1206px] items-center justify-start'>
            {timeLineWorkShifts.map(time => (
              <p key={time} className='!w-[67px] text-center'>
                {time}
              </p>
            ))}
          </div>
          {fakeData.data.zone.single.map((item: { [key: string]: any }, index: number) => (
            <div key={index} className='border-b-bg-[#FCFCFC] min-w-screen flex items-center justify-start border-b'>
              <div className='sticky left-0 min-w-[60px] rounded-md bg-[#D9A536] px-2 py-4 text-center'>
                D0{index + 1}
              </div>
              <div className='ml-5 flex min-w-[1206px] items-center justify-start gap-2 overflow-hidden'>
                {(
                  (item[`room_${index + 1}`] as {
                    id: number;
                    parent: string;
                    staff: string;
                    from_at: string;
                    to_at: string;
                    status: number;
                  }[]) || []
                ).map((child, childIndex) => {
                  const titleDefault = `${child.id} - ${child.staff} (${child.from_at} - ${child.to_at})`;
                  const dynamicWidth = 60 * calculationTimeLine(child.to_at) - accumulatedWidth;
                  item[`room_${childIndex + 1}`] === child.parent ? (accumulatedWidth += dynamicWidth) : 0;
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
