import LayoutAdmin from '@/src/shared/layout/LayoutAdmin';
import HeadPage from '@/src/shared/components/common/HeadPage';
import FilterWorkShift from '@/src/shared/components/common/admin/operate/work_shift/filter/FilterWorkShift';
import { useGetListWorkShift } from '@/src/schemas/services/workShift';
import TableWorkShift from '@/src/shared/components/common/admin/operate/work_shift/table/TableWorkShift';

const WorkShiftPage = () => {
  const { data, tableConfig, isLoading, getFieldValueOnSearchParam, onChangeMultiSearchParams } = useGetListWorkShift();
  return (
    <div className='mx-auto flex w-full flex-col items-center justify-center gap-8'>
      {/* //Head */}
      <HeadPage
        title='Ca làm việc'
        breadcrumbs={[
          { title: 'Vận hành', url: '/operate' },
          { title: 'Ca làm việc', url: '/admin/operate/work_shift' },
        ]}
        createInfo={{
          title: 'Sao chép lịch làm việc',
          href: '/admin/operate/work_shift/create',
        }}
      />
      {/* //Filter */}
      <FilterWorkShift onChangeMultiSearchParams={onChangeMultiSearchParams} />
      {/* //TimeLine */}
      {/* <TimeLineWorkShift /> */}
      {/* //Table */}
      <TableWorkShift
        TABLE_NAME={'WORK_SHIFT'}
        data={data?.data || []}
        tableConfig={tableConfig}
        isLoading={isLoading}
        getFieldValueOnSearchParam={getFieldValueOnSearchParam}
      />
    </div>
  );
};
WorkShiftPage.getLayout = (children: React.ReactNode) => <LayoutAdmin>{children}</LayoutAdmin>;
export default WorkShiftPage;
