import Head from 'next/head';
import React from 'react';
import useTrans from '@/src/shared/hooks/useTrans';
import dynamic from 'next/dynamic';
import LayoutWebsite from '@/src/shared/layout/LayoutWebsite';
import BannerIntroduction from '@/src/shared/components/common/website/introduction/BannerIntroduction';
import CoreValueIntroduction from '@/src/shared/components/common/website/introduction/CoreValueIntroduction';
import TestimonialIntroduction from '@/src/shared/components/common/website/introduction/TestimonialIntroduction';

const ScrollRevealWrapper = dynamic(() => import('@/src/shared/components/custom/ScrollRevealWrapper'), {
  ssr: false,
});
const Introduction = () => {
  const { trans } = useTrans();
  return (
    <React.Fragment>
      <Head>
        <title>{trans.common.menu.introduction}</title>
        <meta name='description' content={trans.common.menu.introduction} />
        <meta name='keywords' content={trans.common.menu.introduction} />
        <meta property='og:type' content='website' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/logo.svg' />
        <link rel='apple-touch-icon' href='/logo.svg' />
      </Head>
      <ScrollRevealWrapper>
        <BannerIntroduction />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <CoreValueIntroduction />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <TestimonialIntroduction />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

Introduction.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default Introduction;
