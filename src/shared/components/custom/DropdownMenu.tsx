import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/src/shared/components/ui/dropdown-menu';
import { useRouter } from 'next/router';
import useTrans from '@/src/shared/hooks/useTrans';
type Props = {
  title: string;
  menuItem: string[];
};
const DropdownMenuCustomize = ({ title, menuItem }: Props) => {
  const router = useRouter();
  const { trans } = useTrans();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{title}</DropdownMenuTrigger>
      <DropdownMenuContent>
        {menuItem.map((item, idx) => {
          const key = item as keyof typeof trans.common.menu;
          const value = trans.common.menu[key];
          return (
            <DropdownMenuItem key={idx} onClick={() => router.push(item)}>
              {value}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuCustomize;
