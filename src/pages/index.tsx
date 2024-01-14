import Head from 'next/head';
import React from 'react';
import useTrans from '@/src/shared/hooks/useTrans';
import dynamic from 'next/dynamic';
import BannerHome from '@/src/shared/components/common/website/home/BannerHome';
import { sectionBanner } from '@/src/shared/constants/dump_website/home';
import IntroductionHome from '@/src/shared/components/common/website/home/IntroductionHome';
import ServiceHome from '@/src/shared/components/common/website/home/ServiceHome';
import AboutUsHome from '@/src/shared/components/common/website/home/AboutUsHome';
import { GetServerSideProps } from 'next/types';
import { IServices } from '@/src/schemas/types/service';
import LayoutWebsite from '@/src/shared/layout/LayoutWebsite';
import { IBaseResponse } from '@/src/schemas/types/base';

const ScrollRevealWrapper = dynamic(() => import('@/src/shared/components/custom/ScrollRevealWrapper'), {
  ssr: false,
});

type Props = {
  services: IBaseResponse<IServices>;
};
function Home({ services }: Props) {
  const { trans } = useTrans();
  return (
    <React.Fragment>
      <Head>
        <title>{trans.common.home}</title>
        <meta name='description' content={trans.common.home} />
        <meta name='keywords' content={trans.common.home} />
        <meta property='og:type' content='website' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/logo.svg' />
        <link rel='apple-touch-icon' href='/logo.svg' />
      </Head>
      <ScrollRevealWrapper>
        <BannerHome data={sectionBanner} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <IntroductionHome />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ServiceHome data={services.data} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <AboutUsHome />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
}
Home.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;

export const getServerSideProps: GetServerSideProps = async ctx => {
  try {
    const getServices = await fetch(`${process.env.NEXT_PUBLIC_PRODUCT_API_URL}/web/v1/services`, {
      method: 'GET',
      cache: 'default',
      // @ts-ignore
    });
    const servicesData = await getServices.json();
    return {
      props: {
        services: servicesData,
      },
    };
  } catch (error) {
    return {
      props: {
        services: [],
      },
    };
  }
};
export default Home;
