import DataTable from '@/src/shared/components/custom/table/DataTable';
import { ColumnDef } from '@tanstack/react-table';
import DataTableColumnHeader from '@/src/shared/components/custom/table/DataTableColumnHeader';
import { ICustomer } from '@/src/schemas/types/customer';
import { convertCustomerType } from '@/src/shared/constants/business';
import { convertStringDate } from '@/src/shared/utils/functions/convertDay';

type Props = {
  TABLE_NAME: string;
  data: ICustomer[];
  tableConfig: any;
  getFieldValueOnSearchParam: any;
};
const TableIndividualCustomers = ({ TABLE_NAME, data, tableConfig, getFieldValueOnSearchParam }: Props) => {
  const columns: ColumnDef<ICustomer>[] = [
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
            <div className='flex w-full items-center justify-between'>
              <p>{props.cell.row.original.full_name}</p>
            </div>
          </div>
        );
      },
      header: ({ column }) => <DataTableColumnHeader column={column} title='Khách hàng' />,
    },
    {
      id: 'customer_infor_group_2',
      accessorKey: 'customer_infor_group_2',
      cell(props) {
        return (
          <div className='grid min-h-[52px] min-w-[267px] grid-cols-1 items-center justify-between gap-2'>
            <div className='flex w-full items-center justify-between'>
              <p>{props.cell.row.original.address}</p>
            </div>
            <div className='flex w-full items-center justify-between'>
              <p>{props.cell.row.original.phone_number}</p>
            </div>
          </div>
        );
      },
      header: ({ column }) => <DataTableColumnHeader column={column} title='Thông tin liên hệ' />,
    },
    {
      id: 'customer_infor_group_3',
      accessorKey: 'customer_infor_group_3',
      cell(props) {
        return (
          <div className='grid min-h-[52px] min-w-[267px] grid-cols-1 items-center justify-between gap-2'>
            <div className='flex w-full flex-col items-start justify-start gap-2'>
              <p className='rounded-sm bg-[#D9A536] p-2'>
                {convertCustomerType(props.cell.row.original.customer_type)}
              </p>
              <p>{props.cell.row.original.phone_number}</p>
            </div>
          </div>
        );
      },
      header: ({ column }) => <DataTableColumnHeader column={column} title='Nhóm khách hàng' />,
    },
    {
      id: 'customer_infor_group_4',
      accessorKey: 'customer_infor_group_4',
      cell(props) {
        return (
          <div className='grid min-h-[52px] min-w-[267px] grid-cols-1 items-center justify-between gap-2'>
            <div className='flex w-full flex-col items-start justify-start gap-2'>
              <p>{props.cell.row.original.personal_branch.address}</p>
              <p>{props.cell.row.original.personal_technician.name}</p>
            </div>
          </div>
        );
      },
      header: ({ column }) => <DataTableColumnHeader column={column} title='Phụ trách bởi' />,
    },
    //TODO: Xem lai truong
    {
      id: 'customer_infor_group_5',
      accessorKey: 'customer_infor_group_5',
      cell(props) {
        return (
          <div className='grid min-h-[52px] min-w-[267px] grid-cols-1 items-center justify-between gap-2'>
            <div className='flex w-full flex-col items-start justify-start gap-2'>
              <p>{props.cell.row.original.personal_branch.address}</p>
              <p>{props.cell.row.original.personal_technician.name}</p>
            </div>
          </div>
        );
      },
      header: ({ column }) => <DataTableColumnHeader column={column} title='Giới thiệu bởi' />,
    },
    {
      id: 'created_at',
      accessorKey: 'created_at',
      cell(props) {
        return <p className='min-w-[144px]'>{convertStringDate(props.cell.row.original.created_at)}</p>;
      },
      header: ({ column }) => <DataTableColumnHeader column={column} title='Ngày tạo' />,
    },
    {
      id: 'updated_at',
      accessorKey: 'updated_at',
      cell(props) {
        return <p className='min-w-[144px]'>{convertStringDate(props.cell.row.original.updated_at)}</p>;
      },
      header: ({ column }) => <DataTableColumnHeader column={column} title='Ngày cập nhật' />,
    },
  ];
  return (
    <div className='h-full w-full'>
      <DataTable data={data && data} columns={columns} tableName={TABLE_NAME} {...tableConfig} />
    </div>
  );
};

export default TableIndividualCustomers;
