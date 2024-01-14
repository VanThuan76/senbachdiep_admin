import Head from 'next/head';
import React from 'react';
import useTrans from '@/src/shared/hooks/useTrans';
import dynamic from 'next/dynamic';
import LayoutWebsite from '@/src/shared/layout/LayoutWebsite';
import MapsContact from '@/src/shared/components/common/website/contact/MapsContact';

const ScrollRevealWrapper = dynamic(() => import('@/src/shared/components/custom/ScrollRevealWrapper'), {
  ssr: false,
});
const Contact = () => {
  const { trans } = useTrans();
  return (
    <React.Fragment>
      <Head>
        <title>{trans.common.menu.contact}</title>
        <meta name='description' content={trans.common.menu.contact} />
        <meta name='keywords' content={trans.common.menu.contact} />
        <meta property='og:type' content='website' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/logo.svg' />
        <link rel='apple-touch-icon' href='/logo.svg' />
      </Head>
      <ScrollRevealWrapper>
        <MapsContact />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};
Contact.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default Contact;
