import { PreImage } from '@/src/shared/components/custom/PreImage';
import useTrans from '@/src/shared/hooks/useTrans';
import React from 'react';

const CoreValueIntroduction = () => {
  const { trans } = useTrans();
  return (
    <section id='CoreValueIntroduction' className='max-w-[1440px] px-4 pb-4 md:px-24 md:pb-8 lg:pb-10 xl:pb-24'>
      <h1 className='mb-5 text-5xl font-bold'>{trans.common.business_info.core_title}</h1>
      <div className='flex flex-col items-center justify-center gap-10'>
        {trans.common.business_info.core.map((item, idx) => {
          return (
            <React.Fragment key={idx}>
              {idx % 2 === 0 ? (
                <div className='grid w-full grid-cols-1 items-center justify-start gap-10 border-b border-r-[#C9C9C9] pb-10 md:grid-cols-2'>
                  <div className='relative mx-auto h-[200px] w-full overflow-hidden rounded-lg'>
                    <PreImage
                      src={`/static/images/image_${4 + idx}.jpg`}
                      height={200}
                      layer={false}
                      alt='Banner'
                      className='object-cover'
                    />
                  </div>
                  <div className='flex w-full flex-col items-center justify-center gap-5'>
                    <h2 className='text-2xl font-semibold'>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              ) : (
                <div className='grid w-full grid-cols-1 items-center justify-start gap-10 border-b border-r-[#C9C9C9] pb-10 md:grid-cols-2'>
                  <div className='flex w-full flex-col items-center justify-center gap-5'>
                    <h2 className='text-2xl font-semibold'>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                  <div className='relative mx-auto h-[200px] w-full overflow-hidden rounded-lg'>
                    <PreImage
                      src={`/static/images/image_${4 + idx}.jpg`}
                      height={200}
                      layer={false}
                      alt='Banner'
                      className='object-cover'
                    />
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default CoreValueIntroduction;
