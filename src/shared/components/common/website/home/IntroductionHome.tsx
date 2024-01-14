import { PreImage } from '@/src/shared/components/custom/PreImage';
import useTrans from '@/src/shared/hooks/useTrans';

const IntroductionHome = () => {
  const { trans } = useTrans();
  return (
    <section id='IntroductionHome' className='max-w-[1440px] px-4 pb-4 md:px-24 md:pb-8 lg:pb-10 xl:pb-24'>
      <div className='flex flex-col items-center justify-center gap-5'>
        <div className='grid w-full grid-cols-1 items-center justify-start gap-10 md:grid-cols-2'>
          <div className='relative mx-auto h-[500px] w-full overflow-hidden rounded-lg'>
            <PreImage
              src='/static/images/image_1.jpg'
              height={500}
              layer={false}
              alt='Banner'
              className='object-cover'
            />
          </div>
          <div className='flex w-full flex-col items-center justify-center gap-5'>
            <h1 className='text-5xl font-bold'>{trans.common.business_info.mission_title}</h1>
            <h2 className='text-2xl font-semibold'>{trans.common.business_info.mission}</h2>
          </div>
        </div>
        <div className='grid w-full grid-cols-1 items-center justify-start gap-10 md:grid-cols-2'>
          <div className='flex w-full flex-col items-center justify-center gap-5'>
            <h1 className='text-5xl font-bold'>{trans.common.business_info.vision_title}</h1>
            <p>{trans.common.business_info.vision}</p>
          </div>
          <div className='relative mx-auto h-[500px] w-full overflow-hidden rounded-lg'>
            <PreImage
              src='/static/images/image_2.jpg'
              height={500}
              layer={false}
              alt='Banner'
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionHome;
