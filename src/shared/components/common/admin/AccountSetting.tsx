import { User2 } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/src/shared/components/ui/dropdown-menu';
import { logout } from '@/src/shared/stores/appSlice';
import { useAppSelector } from '@/src/shared/hooks/useRedux';

const AccountSetting = () => {
  const { user } = useAppSelector(user => user.appSlice);
  const { setTheme, theme } = useTheme();
  const dispatch = useDispatch();
  const router = useRouter();
  function handleLogout() {
    router.push('/login');
    dispatch(logout());
  }
  return (
    <div className='items flex gap-4'>
      <div className='flex flex-col gap-2'>
        <span className='text-sm font-semibold capitalize'>Phạm Thị Thu Uyên</span>
        <span className='text-right text-xs'>Quản lý</span>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className='flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-[#C9C9C9]'>
            <User2 className='h-[1.2rem] w-[1.2rem] ' />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuItem onClick={() => router.push('/accountSetting')} className='flex justify-start gap-2'>
            <div className='h-[8px] w-[8px] rounded-full bg-[#DFD24C] transition-colors duration-300'></div>
            Thông tin tài khoản
          </DropdownMenuItem>
          {/* <DropdownMenuItem
            onClick={() => {
              if (theme === 'light') {
                setTheme('dark');
              } else {
                setTheme('light');
              }
            }}
            className='flex justify-between'
          >
            Đổi theme
            {theme === 'light' ? (
              <Sun className='ml-3 h-[1.2rem] w-[1.2rem]' />
            ) : (
              <Moon className='ml-3 h-[1.2rem]  w-[1.2rem]' />
            )}
          </DropdownMenuItem> */}
          <DropdownMenuItem onClick={() => router.push('/reset-password')} className='flex justify-start gap-2'>
            <div className='h-[8px] w-[8px] rounded-full bg-[#DFD24C] transition-colors duration-300'></div>
            Đổi mật khẩu
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleLogout()} className='flex justify-start gap-2'>
            <div className='h-[8px] w-[8px] rounded-full bg-[#DFD24C] transition-colors duration-300'></div>
            Đăng xuất
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default AccountSetting;
