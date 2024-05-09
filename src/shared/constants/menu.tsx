import { CalendarDays, Files, ShoppingCart, User } from 'lucide-react';

export type MenuItem = {
  title: string;
  permission?: boolean;
  external?: boolean;
  href: string;
  Icon?: React.ReactNode;
  chidren?: MenuItem[];
  isDisable?: boolean;
};

export const APP_MENU: MenuItem[] = [
  {
    title: 'Bán hàng',
    href: '/sale',
    Icon: <ShoppingCart className='mr-2 h-5 w-5' />,
    chidren: [
      {
        title: 'Đơn hàng',
        href: '/sale-detail',
      },
      {
        title: 'Quản lý vé',
        href: '/ticket',
      },
      {
        title: 'Quản lý thẻ',
        href: '/card',
      },
      {
        title: 'Hạng khách hàng',
        href: '/customer-type',
      },
    ],
  },
  {
    title: 'CRM',
    href: '/crm',
    Icon: <User className='mr-2 h-5 w-5' />,
    chidren: [
      {
        title: 'Khách hàng cá nhân',
        href: '/admin/crm/individual_customers',
      },
      {
        title: 'Khách hàng tổ chức',
        href: '/customer',
      },
    ],
  },

  {
    title: 'Vận hành',
    href: '/operate',
    Icon: <CalendarDays className='mr-2 h-5 w-5' />,
    chidren: [
      {
        title: 'Ca làm việc',
        href: '/admin/operate/work_shift',
      },
      {
        title: 'Đặt lịch',
        href: '/order-schedule',
      },
    ],
  },
  {
    title: 'Báo cáo',
    href: '/report',
    // isDisable: true,
    Icon: <Files className='mr-2 h-5 w-5' />,
    chidren: [
      {
        title: 'Báo cáo doanh thu bán hàng',
        href: '/report',
      },
      {
        title: 'Báo cáo thẻ khách hàng',
        href: '/report',
      },
      {
        title: 'Báo cáo tua nhân viên',
        href: '/report',
      },
    ],
  },
];

export function ValidMenus() {
  //   const userType = useAppSelector(state => state.appSlice.user?.userType);
  //   return useMemo(() => APP_MENU.filter(item => item.userType?.includes(userType!)), [userType]);
  return APP_MENU;
}
type SHORTCUT_MENU = {
  title: string;
  href: string;
};
export const SHORTCUT_MENU: SHORTCUT_MENU[] = [
  {
    title: 'Khách hàng cá nhân',
    href: '/admin/crm/individual_customers',
  },
  {
    title: 'Đơn hàng',
    href: '/order',
  },
  {
    title: 'Đặt lịch',
    href: '/order-schedule',
  },
];

export const menuWebsitePath: { path: string; children?: string[] }[] = [
  // {
  //   path: 'home',
  // },
  /*{
    path: 'introduction',
  },
  {
    path: 'services',
    children: ['price_list', 'promotion'],
  },
  {
    path: 'news',
  },
  {
    path: 'contact',
  },*/
];
export const footerContactData = {
  address: 'Số 36 Trần Phú, Quận Ba Đình, TP. Hà Nội',
  phone: '+84 946786564',
  email: 'vjgr@gmail.com',
};
export const footerAboutUsData = ['Lịch sử hình thành', 'Tầm nhìn & Sứ mệnh', 'Điều kiện & điều khoản'];
