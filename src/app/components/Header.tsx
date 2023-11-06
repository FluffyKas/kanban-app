import Image from 'next/image';

import KanbanLogoLight from '../assets/images/logo-light.svg';
import KanbanLogoDark from '../assets/images/logo-dark.svg';
import MoreOptionsIcon from '../assets/images/icon-vertical-ellipsis.svg';
import Button from './Button';
import { useTheme } from '../context/ThemeContext';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className={`flex justify-between px-8 py-5 ${theme === 'dark' ? 'bg-kanban_grey_800 text-white' : 'bg-white'}`}>
      <div className="flex items-center">
        <Image className="mr-[8.75rem]" src={theme === 'dark' ? KanbanLogoDark : KanbanLogoLight} alt="Kanban" />
        {/* TODO: Hardcoded value, need to change later */}
        <h1 className="board-title | text-2xl font-bold">Platform Launch</h1>
      </div>
      <div className="flex gap-6 relative">
        <Button text="+ Add New Task" type="primary" size="large" clickHandler={() => {}} />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image src={MoreOptionsIcon} alt="" aria-hidden="true" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className={`p-4 rounded-lg right-4 absolute w-48 ${theme === 'dark' ? 'bg-kanban_grey_800 text-white' : 'bg-white'} flex flex-col gap-4`}>
            <DropdownMenuItem className="cursor-pointer text-kanban_grey_500">Edit board</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer text-kanban_red">Delete board</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
