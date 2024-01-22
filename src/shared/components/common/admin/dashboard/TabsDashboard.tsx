import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/src/shared/components/ui/tabs';
import TabBed from './tabBed/TabBed';

const TabsDashboard = () => {
  return (
    <section id='TabsDashboard' className='w-full'>
      <Tabs defaultValue='bed' className='w-full'>
        <TabsList className='mb-4 grid w-full grid-cols-3 bg-transparent'>
          <TabsTrigger className='data-[state=active]:bg-[#D9A536]' value='bed'>
            Danh sách giường
          </TabsTrigger>
          <TabsTrigger className='data-[state=active]:bg-[#D9A536]' value='service'>
            Danh sách sản phẩm
          </TabsTrigger>
          <TabsTrigger className='data-[state=active]:bg-[#D9A536]' value='ticket'>
            Danh sách thẻ
          </TabsTrigger>
        </TabsList>
        <TabsContent value='bed'>
          <TabBed />
        </TabsContent>
        <TabsContent value='service'></TabsContent>
        <TabsContent value='ticket'></TabsContent>
      </Tabs>
    </section>
  );
};

export default TabsDashboard;
