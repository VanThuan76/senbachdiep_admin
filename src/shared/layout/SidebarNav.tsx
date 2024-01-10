import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/src/shared/components/ui/collapsible';
import { cn } from '@/src/shared/utils/tailwindPlugin';
import { MenuItem } from '@/src/shared/constants/menu';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

type Props = {
  menus: MenuItem[];
};

const SidebarNav = ({ menus }: Props) => {
  const path = usePathname();
  const [isOpenMenu, setIsOpenMenu] = useState('');
  return (
    <nav className='grid items-start gap-2'>
      {menus.map((item, index) => {
        return item.chidren ? (
          <Collapsible onOpenChange={() => setIsOpenMenu(item.href)} key={index}>
            <CollapsibleTrigger
              className={`group flex w-full items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-[#D9A536] hover:text-accent-foreground ${
                isOpenMenu === item.href && 'bg-[#D9A536]'
              } ${path.split('/').includes(item.href.split('/')[1]) && 'bg-[#D9A536]'}`}
            >
              <div className='flex w-full items-center justify-between'>
                <div className='flex w-full items-center'>
                  {item.Icon} {item.title}
                </div>
                {isOpenMenu === item.href ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className='pl-4 transition-all duration-300'>
              {item.chidren.map(chil => (
                <Link
                  key={chil.href}
                  href={item.isDisable ? '' : chil.href}
                  onClick={e => {
                    if (item.isDisable) e.preventDefault();
                  }}
                  className='flex items-center justify-start gap-3'
                >
                  <div
                    className={cn(
                      'h-[8px] w-[8px] rounded-full transition-colors duration-300',
                      path === chil.href ? 'bg-[#562A17]' : 'bg-[#DFD24C]',
                    )}
                  ></div>
                  <span
                    className={cn(
                      'group flex items-center rounded-md bg-transparent px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                      item.isDisable && 'cursor-not-allowed opacity-40',
                    )}
                  >
                    {chil.Icon}
                    <span>{chil.title}</span>
                  </span>
                </Link>
              ))}
            </CollapsibleContent>
          </Collapsible>
        ) : (
          <Link
            key={index}
            href={item.isDisable ? '' : item.href}
            onClick={e => {
              if (item.isDisable) e.preventDefault();
            }}
          >
            <span
              className={cn(
                'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                path === item.href ? 'bg-primary text-primary-foreground' : 'transparent',
                item.isDisable && 'cursor-not-allowed opacity-40 ',
              )}
            >
              {item.Icon}
              <span>{item.title}</span>
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default SidebarNav;
