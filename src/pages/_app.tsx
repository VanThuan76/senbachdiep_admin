import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import React, { ReactElement } from 'react';
import { NextPage } from 'next';
import { Provider } from 'react-redux';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { store } from 'src/shared/stores';
import { useAppSelector } from '@/src/shared/hooks/useRedux';
import { Toaster } from '@/src/shared/components/ui/toaster';
import { nextFont, queryClient } from '@/src/config/core';
import useRouterChange from '@/src/shared/utils/useRouterChange';
import ProgressBarNext from '@/src/shared/components/custom/ProgressBarNext';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => React.ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
const ConfigLayout = ({
  children,
  getLayout,
}: {
  children: React.ReactElement;
  getLayout: (page: ReactElement) => React.ReactNode;
}) => {
  const isRouteLoading = useAppSelector(state => state.appSlice.isRouteLoading);
  useRouterChange();
  return (
    <main className={nextFont.className}>
      {isRouteLoading && (
        <div className='absolute z-50 flex h-screen w-screen flex-col items-center justify-center gap-2 bg-foreground/20 bg-opacity-70'>
          {/* <Jelly color='#016390' /> */}
        </div>
      )}
      <NextThemesProvider attribute='class' defaultTheme='system' enableSystem>
        {getLayout(children)}
        <Toaster />
      </NextThemesProvider>
    </main>
  );
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => <React.Fragment>{page}</React.Fragment>);
  return (
    <main className={nextFont.className}>
      <Head>
        <title>SENBACHDIEP</title>
        <meta name='description' content='SENBACHDIEP' />
        <meta name='keywords' content='SENBACHDIEP' />
        <meta property='og:type' content='website' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/logo.svg' />
        <link rel='apple-touch-icon' href='/logo.svg' />
      </Head>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <ProgressBarNext />
          <QueryClientProvider client={queryClient}>
            <ConfigLayout getLayout={getLayout}>
              <Component {...pageProps} />
            </ConfigLayout>
          </QueryClientProvider>
        </Provider>
      </SessionProvider>
    </main>
  );
}
