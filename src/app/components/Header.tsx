import Image from 'next/image';

import KanbanLogoLight from '../assets/images/logo-light.svg';
import KanbanLogoDark from '../assets/images/logo-dark.svg';
import MoreOptionsIcon from '../assets/images/icon-vertical-ellipsis.svg';
import Button from './Button';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className={`flex justify-between px-8 py-5 ${theme === 'dark' ? 'bg-kanban_grey_800' : 'bg-white'}`}>
      <div className="flex items-center">
        <Image className="mr-8" src={theme === 'dark' ? KanbanLogoDark : KanbanLogoLight} alt="Kanban" />
        {/* TODO: Hardcoded value, need to change later */}
        <h1>Platform Launch</h1>
      </div>
      <div className="flex gap-6">
        <Button text="+ Add New Task" type="primary" size="large" clickHandler={() => {}} />
        <button aria-label="More options">
          <Image src={MoreOptionsIcon} alt="" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
};

export default Header;
