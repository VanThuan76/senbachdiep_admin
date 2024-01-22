import { useGetListCustomer } from '@/src/schemas/services/customer';
import HeadPage from '@/src/shared/components/common/HeadPage';
import FilterIndividualCustomers from '@/src/shared/components/common/admin/crm/individual_customers/filter/FilterIndividualCustomers';
import TableIndividualCustomers from '@/src/shared/components/common/admin/crm/individual_customers/table/TableIndividualCustomers';
import LayoutAdmin from '@/src/shared/layout/LayoutAdmin';

const IndividualCustomersPage = () => {
  const { data, tableConfig, getFieldValueOnSearchParam, onChangeMultiSearchParams } = useGetListCustomer();
  return (
    <div className='mx-auto flex w-full flex-col items-center justify-center gap-8'>
      {/* //Head */}
      <HeadPage
        title='Khách hàng cá nhân'
        breadcrumbs={[
          { title: 'CRM', url: '/crm' },
          { title: 'Khách hàng cá nhân', url: '/customer' },
        ]}
        isCreate={true}
        createInfo={{
          title: 'Tạo khách hàng',
          href: '/admin/crm/individual_customers/create',
        }}
      />
      {/* //Filter */}
      <FilterIndividualCustomers onChangeMultiSearchParams={onChangeMultiSearchParams} />
      {/* //Table */}
      <TableIndividualCustomers
        TABLE_NAME={'INDIVIDUAL_CUSTOMERS'}
        data={data?.data || []}
        tableConfig={tableConfig}
        getFieldValueOnSearchParam={getFieldValueOnSearchParam}
      />
    </div>
  );
};
IndividualCustomersPage.getLayout = (children: React.ReactNode) => <LayoutAdmin>{children}</LayoutAdmin>;
export default IndividualCustomersPage;
