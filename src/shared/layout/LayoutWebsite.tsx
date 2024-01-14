import React from 'react';
import { setCookie } from 'cookies-next';
import FooterLayoutWebsite from './FooterLayoutWebsite';
import HeaderLayoutWebsite from './HeaderLayoutWebsite';
import { APP_SAVE_KEY } from '../constants/main';
interface Props {
  children: React.ReactNode;
}
const LayoutWebsite = ({ children }: Props) => {
  setCookie(APP_SAVE_KEY.TOKEN_KEY, process.env.TOKEN_KEY);
  return (
    <React.Fragment>
      <HeaderLayoutWebsite />
      <main className='mx-auto flex min-h-screen max-w-[1980px] flex-col items-center justify-center overflow-x-hidden dark:bg-[#141523]'>
        {children}
      </main>
      <FooterLayoutWebsite />
    </React.Fragment>
  );
};

export default LayoutWebsite;
