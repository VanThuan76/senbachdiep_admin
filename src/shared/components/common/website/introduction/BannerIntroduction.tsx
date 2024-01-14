import { PreImage } from '@/src/shared/components/custom/PreImage';
import useTrans from '@/src/shared/hooks/useTrans';

const BannerIntroduction = () => {
  const { trans } = useTrans();
  return (
    <section id='BannerIntroduction' className='block w-screen pb-10'>
      <div className='snap-x-mandatory scrollbar-none light:text-white relative flex min-h-[450px] overflow-hidden'>
        <div className='relative mx-auto w-screen overflow-hidden'>
          <PreImage
            src='/static/images/image_3.jpg'
            width={1980}
            height={450}
            layer={true}
            alt='Banner'
            className='object-cover'
          />
        </div>
        <div className='absolute top-1/2 w-full -translate-y-1/2 transform text-center text-white'>
          <h1 className='w-full text-3xl font-bold md:text-5xl lg:text-8xl'>{trans.common.menu.introduction}</h1>
        </div>
      </div>
    </section>
  );
};

export default BannerIntroduction;
