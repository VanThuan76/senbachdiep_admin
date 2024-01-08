import useTrans from '@/src/shared/hooks/useTrans';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';

const SwitchLanguageMode = () => {
  const { lang, changeLanguage } = useTrans();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='cursor-pointer'>
        <div>{lang}</div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => changeLanguage('vi')}>VietNam</DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('en')}>English</DropdownMenuItem>
        {/* List language support */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SwitchLanguageMode;
