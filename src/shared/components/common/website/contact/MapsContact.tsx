import useTrans from '@/src/shared/hooks/useTrans';
import React from 'react';

const MapsContact = () => {
  const { trans } = useTrans();
  return (
    <section id='MapsContact' className='w-screen px-4 pb-4 md:px-24 md:pb-8 lg:pb-10 xl:pb-24'>
      <h1 className='mt-5 font-bold text-2xl mb-3 border-b border-b-[#555]'>{trans.common.home}</h1>
      <p className='font-bold text-md mb-3'>
        {trans.common.phone_number}: {trans.common.business_info.phone_number}
      </p>
      <p className='font-bold text-md mb-3'>Email: {trans.common.business_info.email}</p>
      <p className='font-bold text-md mb-3'>
        {trans.common.address}: {trans.common.business_info.address}
      </p>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14899.54793978821!2d105.8680589!3d20.9971669!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135add09c5daa7b%3A0xb977de42fa0f8ce3!2sCentury%20Tower!5e0!3m2!1svi!2s!4v1702919974958!5m2!1svi!2s'
        width='1280'
        height='450'
        style={{ border: 0 }}
        allowFullScreen={true}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>{' '}
    </section>
  );
};

export default MapsContact;
