import { breakpoints } from '@/src/config/core';
import { useEffect, useState } from 'react';

const useBreakPoint = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string | null>(null);
  useEffect(() => {
    const handleResize = () => {
      const breakpoint = Object.keys(breakpoints)
        .reverse()
        .find(key => window.innerWidth >= breakpoints[key as keyof typeof breakpoints]);

      setCurrentBreakpoint(breakpoint || 'sm');
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return currentBreakpoint;
};

export default useBreakPoint;
