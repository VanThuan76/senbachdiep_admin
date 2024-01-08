import DataTable from '@/src/shared/components/custom/table/DataTable';
import { ColumnDef } from '@tanstack/react-table';
import DataTableColumnHeader from '@/src/shared/components/custom/table/DataTableColumnHeader';

type Props = {
  TABLE_NAME: string;
  examples: any;
  tableConfig: any;
  getFieldValueOnSearchParam: any;
};
const TableExample = ({ TABLE_NAME, examples, tableConfig, getFieldValueOnSearchParam }: Props) => {
  const columnExample: ColumnDef<any>[] = [
    {
      id: 'example',
      accessorKey: 'example',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='#' defaultFilter={getFieldValueOnSearchParam('example')} />
      ),
    },
  ];
  return <DataTable data={examples && examples} columns={columnExample} tableName={TABLE_NAME} {...tableConfig} />;
};

export default TableExample;
