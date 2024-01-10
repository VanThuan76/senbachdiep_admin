import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/src/shared/components/ui/table';
import { Skeleton } from '@/src/shared/components/ui/skeleton';
import DataTablePagination from './DataTablePagination';
import { Popover, PopoverContent, PopoverTrigger } from '@/src/shared/components/ui/popover';
import ThreeDotAlign from '@/src/shared/components/icons/ThreeDotAlign';
import { useRouter } from 'next/router';

export const COLUMNDATA_TYPE = {
  STRING: 'string',
  DATE: 'date',
  BOOLEAN: 'boolean',
};
type CollapseStates = Record<string, boolean>;

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  tableName: string;
  isClientPagination?: boolean;
  isLoading: boolean;
  pageSize: number;
  pageIndex: number;
  pageCount: number;
  setCollapseStates: Dispatch<SetStateAction<CollapseStates>>;
  handChangePagination: (value: number, type: 'Page_change' | 'Size_change') => void;
}

function DataTable<TData, TValue>({
  columns,
  data,
  tableName,
  isClientPagination = false,
  pageCount,
  pageSize,
  pageIndex,
  isLoading,
  handChangePagination,
}: DataTableProps<TData, TValue>) {
  const [columnVisibility, setColumnVisibility] = useLocalStorage(
    `${process.env.NEXT_PUBLIC_APP_NAME}::${tableName}::columnVisibility`,
    {},
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const router = useRouter();
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: !isClientPagination,
    pageCount: !isClientPagination ? pageCount : undefined,
    // autoResetPageIndex: true,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),

    state: {
      sorting,
      columnVisibility,
      columnFilters,
    },
  });
  useEffect(() => {
    if (!isClientPagination) {
      table.setPageSize(pageSize);
      table.setPageIndex(pageIndex);
    }
  }, [pageIndex, pageSize, isClientPagination, table]);
  return (
    <div className=''>
      <div className='w-full rounded-md border'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                <TableHead
                  key={0}
                  className='sticky left-0 flex min-h-[20px] w-full items-center justify-center border-0 border-r border-r-slate-500 bg-white'
                >
                  #
                </TableHead>
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          {isLoading ? (
            <TableBody>
              {Array.from(Array(table.getState().pagination.pageSize).keys()).map(index => (
                <TableRow key={index}>
                  <TableCell colSpan={columns.length + 1} className='px-4'>
                    <Skeleton className='mx-2 h-10 w-full rounded-xl ' />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <TableBody>
              {table.getRowModel().rows?.length + 1 ? (
                table.getRowModel().rows.map(row => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                    className='relative h-full cursor-pointer shadow-lg'
                  >
                    <Popover>
                      <PopoverTrigger asChild>
                        <TableCell className='sticky left-0 flex min-h-[80px] w-full items-center justify-center border-0 border-r border-r-slate-500 bg-white'>
                          <ThreeDotAlign className='h-[16px] w-[16px]' />
                        </TableCell>
                      </PopoverTrigger>
                      <PopoverContent
                        align='end'
                        className='absolute bottom-0 flex max-w-[130px] flex-col items-start justify-start gap-2 px-4 py-2'
                      >
                        <div className='flex items-center justify-start gap-4'>
                          <div className='h-[8px] w-[8px] rounded-full bg-[#DFD24C]'></div>
                          {/* @ts-ignore: Must be have id(unique) */}
                          <p onClick={() => row.original && router.push(`/${row.original?.id}`)}>Xem</p>
                        </div>
                        <div className='flex items-center justify-start gap-4'>
                          <div className='h-[8px] w-[8px] rounded-full bg-[#DFD24C]'></div>
                          {/* @ts-ignore: Must be have id(unique) */}
                          <p onClick={() => row.original && router.push(`/edit/${row.original?.id}`)}>Chỉnh sửa</p>
                        </div>
                      </PopoverContent>
                    </Popover>
                    {row.getVisibleCells().map(cell => (
                      <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length + 1} className='h-24 text-center'>
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          )}
        </Table>
      </div>

      <div className='flex flex-wrap items-center justify-end space-x-2 py-4'>
        <DataTablePagination
          table={table}
          onChangeFunc={handChangePagination}
          isClientPagination={isClientPagination}
        />
      </div>
    </div>
  );
}
export default DataTable;
