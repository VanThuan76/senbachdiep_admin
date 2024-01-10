import { ChevronRight } from 'lucide-react';
import { useRouter } from 'next/router';
import React from 'react';

export type IBreadcrumb = {
  url: string;
  title: string;
};

type Props = {
  breadcrumbs: IBreadcrumb[];
};

const Breadcrumb = ({ breadcrumbs }: Props) => {
  const router = useRouter();
  return (
    <div className='flex items-center justify-start'>
      {breadcrumbs.map((breadcrumb, index) => (
        <div
          key={index}
          onClick={() => router.push(breadcrumb.url)}
          className='flex cursor-pointer items-center justify-start hover:underline'
        >
          <p className='text-sm'>{breadcrumb.title}</p>
          {breadcrumbs.length - 1 !== index && <ChevronRight size={24} />}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
