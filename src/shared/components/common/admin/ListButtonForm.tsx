import { Loader2 } from 'lucide-react';
import { Button } from '../../ui/button';
type Props = {
  isLoading: any;
  resetForm: any;
  className?: string;
};
const ListButtonForm = ({ isLoading, className, resetForm }: Props) => {
  return (
    <div className={`flex items-center justify-end gap-8 ${className}`}>
      <Button
        className='bg-transparent text-[#562A17] shadow-none hover:bg-transparent hover:text-[#562A17]'
        type='button'
      >
        Quay lại
      </Button>
      <Button
        className='min-w-[100px] cursor-pointer border-2 border-[#562A17] bg-transparent text-[#562A17] shadow-none hover:bg-transparent hover:text-[#562A17]'
        type='button'
        onClick={resetForm}
      >
        Làm lại
      </Button>
      <Button className='min-w-[100px] bg-[#D9A536] text-black hover:bg-[#562A17] hover:text-white' type='submit'>
        {isLoading && <Loader2 size={16} className='animate-spin' />}
        Lưu
      </Button>
    </div>
  );
};

export default ListButtonForm;
