import LayoutAdmin from '@/src/shared/layout/LayoutAdmin';
import FilterWorkShift from '@/src/shared/components/common/admin/operate/work_shift/filter/FilterWorkShift';
import { useGetListWorkShift } from '@/src/schemas/services/workShift';
import TableBed from './TableBed';

const TabBed = () => {
  const { data, tableConfig, isLoading, getFieldValueOnSearchParam, onChangeMultiSearchParams } = useGetListWorkShift();
  return (
    <div>
      {/* //Filter */}
      <FilterWorkShift onChangeMultiSearchParams={onChangeMultiSearchParams} />
      {/* //Table */}
      <TableBed
        TABLE_NAME={'BED'}
        data={data?.data || []}
        tableConfig={tableConfig}
        getFieldValueOnSearchParam={getFieldValueOnSearchParam}
        isLoading={isLoading}
        className='mt-4'
      />
    </div>
  );
};
TabBed.getLayout = (children: React.ReactNode) => <LayoutAdmin>{children}</LayoutAdmin>;
export default TabBed;
