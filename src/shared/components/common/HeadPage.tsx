import Breadcrumb, { IBreadcrumb } from '@/src/shared/components/custom/Breadcrumb';
import { Button } from '@/src/shared/components/ui/button';
import { useRouter } from 'next/router';
type Props = {
  title: string;
  breadcrumbs: IBreadcrumb[];
  createInfo: { title: string; href: string };
};
const HeadPage = ({ title, createInfo, breadcrumbs }: Props) => {
  const router = useRouter();
  return (
    <div className='flex w-full items-center justify-between'>
      <div className='flex w-full flex-wrap items-center justify-start gap-2'>
        <h1 className='border-r border-r-slate-400 pr-3 text-2xl font-semibold'>{title}</h1>
        <Breadcrumb breadcrumbs={breadcrumbs} />
      </div>
      <Button
        onClick={() => router.push(createInfo.href)}
        className='min-w-[155px] bg-[#D9A536] text-black hover:bg-[#562A17] hover:text-white'
      >
        {createInfo.title}
      </Button>
    </div>
  );
};

export default HeadPage;
