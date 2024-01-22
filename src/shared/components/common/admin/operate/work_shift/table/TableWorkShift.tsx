import { ColumnDef } from '@tanstack/react-table';
import { IWorkShift } from '@/src/schemas/types/workShift';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Folder, Workflow } from 'lucide-react';
import { Tree } from '@/src/shared/components/custom/Tree';

type Props = {
  TABLE_NAME: string;
  data: IWorkShift[];
  tableConfig: any;
  getFieldValueOnSearchParam: any;
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
const TableWorkShift = ({ TABLE_NAME, data, tableConfig, getFieldValueOnSearchParam }: Props) => {
  const [toggleFilter, setToggleFilter] = useState(false);
  const columns: ColumnDef<IWorkShift>[] = [
    {
      id: 'customer_infor_group_1',
      accessorKey: 'customer_infor_group_1',
      cell(props) {
        return (
          <div className='grid min-h-[52px] min-w-[267px] grid-cols-1 items-center justify-between gap-2'>
            <div className='flex w-full items-center justify-between'>
              <p className='rounded-sm bg-[#D9A536] p-2'>SBD000{props.cell.row.original.id}</p>
              <p>Status</p>
            </div>
          </div>
        );
      },
    },
  ];
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
              data={fakeData}
              className='h-[460px] w-[200px] flex-shrink-0'
              initialSlelectedItemId='f12'
              folderIcon={Folder}
              itemIcon={Workflow}
            />
          </div>
        )}
      </div>
      {/* //TimelineGird */}
      <div className='w-full md:col-span-18'>
        {data.map(item => (
          <div key={item.id}>
            <p>{item.bed.name}</p>
          </div>
        ))}
      </div>
      {/* <DataTable visibleThead={true} data={data && data} columns={columns} tableName={TABLE_NAME} {...tableConfig} /> */}
    </div>
  );
};

export default TableWorkShift;
