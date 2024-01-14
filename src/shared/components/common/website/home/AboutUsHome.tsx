import useTrans from '@/src/shared/hooks/useTrans';

const AboutUsHome = () => {
  const { trans } = useTrans();
  return (
    <section id='AboutUsHome' className='w-screen px-4 pb-4 md:px-24 md:pb-8 lg:pb-10 xl:pb-24'>
      <h1 className='mb-5 text-5xl font-bold'>{trans.common.about_us}</h1>
      <div className='flex flex-col items-center justify-center gap-10 rounded-lg bg-[#E6D7BD] p-12'>
        {trans.common.business_info.introduction.map((item, idx) => (
          <li key={idx} className='text-xl leading-[32px]'>
            {item}
          </li>
        ))}
      </div>
    </section>
  );
};

export default AboutUsHome;
