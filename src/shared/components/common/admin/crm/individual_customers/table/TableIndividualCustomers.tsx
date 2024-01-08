import DataTable from '@/src/shared/components/custom/table/DataTable';
import { ColumnDef } from '@tanstack/react-table';
import DataTableColumnHeader from '@/src/shared/components/custom/table/DataTableColumnHeader';
import { ICustomer } from '@/src/schemas/types/customer';

type Props = {
  TABLE_NAME: string;
  data: ICustomer[];
  tableConfig: any;
  getFieldValueOnSearchParam: any;
};
const TableIndividualCustomers = ({ TABLE_NAME, data, tableConfig, getFieldValueOnSearchParam }: Props) => {
  const columns: ColumnDef<ICustomer>[] = [
    {
      id: 'id',
      accessorKey: 'id',
      cell(props) {
        return <p>{props.cell.row.id}</p>;
      },
      header: ({ column }) => <DataTableColumnHeader column={column} title='#' />,
    },
    {
      id: 'customer_infor_group_1',
      accessorKey: 'customer_infor_group_1',
      cell(props) {
        return (
          <div className='grid min-h-[52px] max-w-[300px] grid-cols-1 items-center justify-between gap-2'>
            <div className='flex w-full items-center justify-between'>
              <p className='rounded-sm bg-[#C9C9C9] p-2'>SBD000{props.cell.row.original.id}</p>
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
          <div className='grid min-h-[52px] max-w-[300px] grid-cols-1 items-center justify-between gap-2'>
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
  ];
  return (
    <div className='h-full w-full'>
      <DataTable data={data && data} columns={columns} tableName={TABLE_NAME} {...tableConfig} />
    </div>
  );
};

export default TableIndividualCustomers;
