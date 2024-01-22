import Breadcrumb, { IBreadcrumb } from '@/src/shared/components/custom/Breadcrumb';
import { Button } from '@/src/shared/components/ui/button';
import { useRouter } from 'next/router';
type Props = {
  isCreate?: boolean;
  title: string;
  breadcrumbs: IBreadcrumb[];
  createInfo?: { title: string; href: string };
  className?: string;
};
const HeadPage = ({ isCreate = false, title, createInfo, breadcrumbs, className }: Props) => {
  const router = useRouter();
  return (
    <div className={`flex w-full items-center justify-between ${className}`}>
      <div className='flex w-full flex-wrap items-center justify-start gap-2'>
        <h1 className='border-r border-r-slate-400 pr-3 text-2xl font-semibold'>{title}</h1>
        <Breadcrumb breadcrumbs={breadcrumbs} />
      </div>
      {isCreate && createInfo && (
        <Button
          onClick={() => router.push(createInfo.href)}
          className='min-w-[155px] bg-[#D9A536] text-black hover:bg-[#562A17] hover:text-white'
        >
          {createInfo.title}
        </Button>
      )}
    </div>
  );
};

export default HeadPage;
