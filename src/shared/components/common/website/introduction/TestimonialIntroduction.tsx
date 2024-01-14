import useTrans from '@/src/shared/hooks/useTrans';
import React from 'react';

const TestimonialIntroduction = () => {
  const { trans } = useTrans();
  return (
    <section id='TestimonialIntroduction' className='max-w-[1440px] px-4 pb-4 md:px-24 md:pb-8 lg:pb-10 xl:pb-24'>
      <h1 className='font-bold text-5xl mb-5'>{trans.common.business_info.announced_leaderShip_title}</h1>
      <div className='grid grid-cols-3 justify-center items-center gap-5'>
        {trans.common.business_info.announced_leaderShip.map((item, idx) => (
          <figure key={idx} className='max-h-[300px] flex flex-col justify-center items-center p-4 text-center bg-gray-50 border-b border-gray-200 md:p-8 lg:border-r dark:bg-gray-800 dark:border-gray-700 rounded-lg'>
            <blockquote className='mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400'>
              <p className='my-4 leading-7'>
               {item}
              </p>
            </blockquote>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default TestimonialIntroduction;
