import LayoutAdmin from '@/src/shared/layout/LayoutAdmin';
import TabsDashboard from '@/src/shared/components/common/admin/dashboard/TabsDashboard';
import HeadPage from '@/src/shared/components/common/HeadPage';

const AdminPage = () => {
  return (
    <div className='mx-auto flex w-full flex-col items-center justify-center gap-8'>
      {/* //Head */}
      <HeadPage
        title='Trang chủ'
        breadcrumbs={[{ title: 'Trang chủ', url: '/admin' }]}
        isCreate={true}
        createInfo={{
          title: 'Tạo khách hàng',
          href: '/admin/crm/individual_customers/create',
        }}
      />
      <TabsDashboard />
    </div>
  );
};
AdminPage.getLayout = (children: React.ReactNode) => <LayoutAdmin>{children}</LayoutAdmin>;
export default AdminPage;
