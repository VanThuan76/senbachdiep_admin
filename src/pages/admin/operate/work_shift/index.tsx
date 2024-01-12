import LayoutAdmin from '@/src/shared/layout/LayoutAdmin';
import HeadPage from '@/src/shared/components/common/HeadPage';
import TimeLineWorkShift from '@/src/shared/components/common/admin/operate/work_shift/TimeLine';

const WorkShiftPage = () => {
  return (
    <div className='mx-auto flex w-full flex-col items-center justify-center gap-8 px-8'>
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
      {/* //TimeLine */}
      <TimeLineWorkShift />
    </div>
  );
};
WorkShiftPage.getLayout = (children: React.ReactNode) => <LayoutAdmin>{children}</LayoutAdmin>;
export default WorkShiftPage;
