import React, { SVGProps } from 'react';

export default function IconComment({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='20' height='20' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <path
        d='M11 6C11 3.23857 8.7614 1 6 1C3.23857 1 1 3.23857 1 6C1 6.8214 1.1986 7.6147 1.57245 8.3251L1.01427 10.4693C0.99599 10.5395 0.995995 10.6133 1.01429 10.6835C1.07345 10.9107 1.30555 11.0469 1.53269 10.9876L3.67789 10.4291C4.38758 10.8019 5.1798 11 6 11C8.7614 11 11 8.7614 11 6Z'
        fill='#562A17'
      />
    </svg>
  );
}
