import { PreImage } from '@/src/shared/components/custom/PreImage';
interface Props {
  data: { image: string };
}
const BannerHome = ({ data }: Props) => {
  return (
    <section id='BannerHome' className='block w-screen pb-10'>
      <div className='snap-x-mandatory scrollbar-none light:text-white relative flex min-h-[450px] overflow-hidden'>
        <div className='relative mx-auto w-screen overflow-hidden'>
          <PreImage
            src={data.image as string}
            width={1980}
            height={450}
            layer={false}
            alt='Banner'
            className='object-cover'
          />
        </div>
      </div>
    </section>
  );
};

export default BannerHome;
