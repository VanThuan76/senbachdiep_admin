import { PreImage } from '@/src/shared/components/custom/PreImage';
import useTrans from '@/src/shared/hooks/useTrans';
import { SafeString } from 'handlebars';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, useState } from 'react';
import { Button } from '../../../ui/button';
const IntroductionHomeBak = () => {
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

const OddLayoutItem = (props: { item: any; idx: any }) => {
  return (
    <div className='grid w-full grid-cols-1 items-center justify-start gap-10 md:grid-cols-2'>
      <div
        className={
          props.idx % 2 == 0
            ? 'relative mx-auto rounded-lg md:order-last'
            : 'relative mx-auto h-[500px] w-[80%] overflow-hidden rounded-lg'
        }
      >
        <PreImage src={props.item.image} height={500} layer={false} alt='Banner' className='object-cover' />
      </div>
      <div className='flex w-full flex-col items-center justify-center gap-5'>
        <h1 className='text-4xl font-bold'>{props.item.title}</h1>
        <p className='text-xl font-semibold' dangerouslySetInnerHTML={{ __html: props.item.content }}></p>
      </div>
    </div>
  );
};

const OddLayout = (props: { items: any }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      {props.items.map((_item: any, _idx: any) => (
        <OddLayoutItem key={_idx} item={_item} idx={_idx} />
      ))}
    </div>
  );
};

const GridLayoutItem = (props: { item: any; idx: any }) => {
  const [displayStatus, setDisplayStatus] = useState(false);
  return (
    <div className='grid-item-container'>
      <PreImage src={props.item.image} height={500} layer={false} alt='service' className='object-cover' />
      <div className='grid-content w-full justify-start'>
        <p className='grid-title text-capitalize text-2xl'>{props.item.title}</p>
        <p className='grid-sub-title text-bold' dangerouslySetInnerHTML={{ __html: props.item.subTitle }}></p>
        <p className='grid-main-content text-bold li-dot' dangerouslySetInnerHTML={{ __html: props.item.content }}></p>
      </div>
    </div>
  );
};

const GridLayout = (props: { items: any }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='grid w-full grid-cols-1 items-center justify-start gap-10 md:grid-cols-2'>
        {props.items.map((_item: any, _idx: any) => (
          <GridLayoutItem key={_idx} item={_item} idx={_idx} />
        ))}
      </div>
    </div>
  );
};

const IntroductionHome = () => {
  const { trans } = useTrans();
  return (
    <div id='IntroductionHome' className='container max-w-[1440px] px-4 pb-4 md:px-24 md:pb-8 lg:pb-10 xl:pb-24'>
      {trans.common.home_sections.map((_element, _idx) => (
        <section id={`section_${_idx}`} key={`section_${_idx}`} className='flex flex-col items-center justify-center'>
          <h2 className='title text-uppercase text-4xl font-bold'>{_element.title}</h2>
          {_element.type == 'odds' && <OddLayout items={_element.items} />}
          {_element.type == 'grid' && <GridLayout items={_element.items} />}
        </section>
      ))}
    </div>
  );
};

export default IntroductionHome;
