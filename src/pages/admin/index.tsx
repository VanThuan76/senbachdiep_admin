import TableExample from '@/src/shared/components/common/admin/example/table/TableExample';
import Breadcrumb from '@/src/shared/components/custom/Breadcrumb';
import { Button } from '@/src/shared/components/ui/button';
import LayoutAdmin from '@/src/shared/layout/LayoutAdmin';

const AdminPage = () => {
  // const {data, tableConfig, getFieldValueOnSearchParam} = use
  return (
    <div className='mx-auto w-full p-8'>
      {/* //Head */}
      <div className='flex w-full items-center justify-between'>
        <div className='flex w-full flex-wrap items-center justify-start gap-2'>
          <h1 className='border-r border-r-slate-400 pr-3 text-2xl font-semibold'>Khách hàng cá nhân</h1>
          <Breadcrumb
            breadcrumbs={[
              { title: 'CRM', url: '/crm' },
              { title: 'Khách hàng cá nhân', url: '/customer' },
            ]}
          />
        </div>
        <Button className='min-w-[155px]'>Tạo khách hàng</Button>
      </div>
      {/* //Filter */}
      {/* //Table */}
      {/* <TableExample /> */}
    </div>
  );
};
AdminPage.getLayout = (children: React.ReactNode) => <LayoutAdmin>{children}</LayoutAdmin>;
export default AdminPage;
