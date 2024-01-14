import Head from 'next/head';
import React from 'react';
import LayoutWebsite from 'src/shared/layout/LayoutWebsite';
import useTrans from '@/src/shared/hooks/useTrans';
import ImageUpdateSoon from '@/src/shared/components/icons/ImageUpdateSoon';
const Promotion = () => {
  const { trans } = useTrans();
  return (
    <React.Fragment>
      <Head>
        <title>{trans.common.menu.promotion}</title>
        <meta name='description' content={trans.common.menu.promotion} />
        <meta name='keywords' content={trans.common.menu.promotion} />
        <meta property='og:type' content='website' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/logo.svg' />
        <link rel='apple-touch-icon' href='/logo.svg' />
      </Head>
      <div className='flex-col-center mx-auto h-screen w-full'>
        <h1 className='text-xl font-semibold md:text-3xl'>{trans.common.title_update_soon}</h1>
        <ImageUpdateSoon />
      </div>
    </React.Fragment>
  );
};

Promotion.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default Promotion;
