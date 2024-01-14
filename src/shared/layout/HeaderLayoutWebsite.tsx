import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import IconLogoLight from '@/src/shared/components/icons/IconLogoLight';
import ListMenu from '@/src/shared/components/common/website/layout/header/ListMenu';
import HambergerMenu from '@/src/shared/components/common/website/layout/header/HambergerMenu';
import SwitchLanguageMode from '@/src/shared/components/custom/SwitchLanguageMode';
import ThemeModeToggle from '@/src/shared/components/custom/ToggleThemeMode';
import { menuWebsitePath } from '@/src/shared/constants/menu';

const HeaderLayoutWebsite = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 0 && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollTop === 0 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  return (
    <motion.section
      initial={{ height: '100px' }}
      animate={{ height: isScrolled ? '80px' : '100px' }}
      transition={{ duration: 0.3 }}
      className={`flex-row-between-center top-0 z-50 w-full gap-5 bg-[var(--main-color)] px-5 text-white transition md:px-10 ${
        isScrolled
          ? 'light:text-black border-black-300 light:bg-[#876445] sticky inset-0 border-b-[1px] border-opacity-50 bg-opacity-10 backdrop-blur backdrop-filter duration-500 ease-in-out'
          : 'sticky bg-opacity-100 duration-500 ease-in-out'
      }`}
    >
      <div className='flex-row-center absolute gap-2'>
        <div className='flex-row-center w-full cursor-pointer gap-5'>
          <IconLogoLight color='#fff' onClick={() => router.push('/')} />
        </div>
        <div className='ml-5 hidden min-w-[500px] items-center justify-center gap-10 dark:text-white lg:flex'>
          <ListMenu menuPath={menuWebsitePath} />
        </div>
      </div>
      <div className='flex-row-center absolute right-5 gap-2'>
        <div className='flex-row-center w-full gap-4'>
          {/* ///Options Menu */}
          <SwitchLanguageMode className='hidden md:block' />
          <ThemeModeToggle className='hidden md:block' />
          {/* ///Hamberger Menu */}
          <HambergerMenu />
        </div>
      </div>
    </motion.section>
  );
};

export default HeaderLayoutWebsite;
