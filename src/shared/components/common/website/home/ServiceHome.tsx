import useTrans from '@/src/shared/hooks/useTrans';
import { PreImage } from '@/src/shared/components/custom/PreImage';
import { Badge } from '@/src/shared/components/ui/badge';
import IconUser from '@/src/shared/components/icons/business/IconUser';
import IconStar from '@/src/shared/components/icons/business/IconStar';
import IconComment from '@/src/shared/components/icons/business/IconComment';
import { IServices } from '@/src/schemas/types/service';
type Props = {
  data: IServices | undefined;
};
const ServiceHome = ({ data }: Props) => {
  const { trans } = useTrans();
  if (!data) return <></>;
  return (
    <section id='ServiceHome' className='w-screen px-4 pb-4 md:px-24 md:pb-8 lg:pb-10 xl:pb-24'>
      <h1 className='mb-5 text-5xl font-bold'>{trans.common.service}</h1>
      <div className='lg:grid-col-6 grid w-full grid-cols-1 items-center justify-start gap-5 md:grid-cols-4'>
        {data.services.map((item, idx) => {
          return (
            <div className='flex w-full flex-col items-start justify-start gap-5' key={idx}>
              <div className='relative mx-auto h-[300px] w-full overflow-hidden rounded-lg'>
                <PreImage
                  src={item.image_url as string}
                  height={300}
                  layer={false}
                  alt={item.title as string}
                  className='object-cover'
                />
              </div>
              <div className='flex h-[300px] w-full flex-col items-start justify-start gap-3'>
                <h2 className='text-2xl font-bold'>{item.title}</h2>
                <div className='flex items-center justify-start gap-2'>
                  {item.tags.map((tag, tagId) => (
                    <Badge variant='outline' key={tagId}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p>{item.introduction.substring(0, 50) + '...'}</p>
                <div className='flex items-center justify-start gap-3'>
                  <div className='flex items-center justify-start gap-2 border-r border-r-[#C9C9C9] pr-3'>
                    <IconUser />
                    <p>{item.used_count}</p>
                  </div>
                  <div className='flex items-center justify-start gap-2 border-r border-r-[#C9C9C9] pr-3'>
                    <IconStar />
                    <p>{item.rate}</p>
                  </div>
                  <div className='flex items-center justify-start gap-2'>
                    <IconComment />
                    <p>{item.comment_count}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceHome;
