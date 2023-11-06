'use client';

import Image from 'next/image';

import KanbanLogoLight from '../assets/images/logo-light.svg';
import KanbanLogoDark from '../assets/images/logo-dark.svg';
import HideSidebarIcon from '../assets/images/icon-hide-sidebar.svg';
import SearchIcon from '../assets/images/icon-search.svg';
import BoardIcon from '../assets/images/icon-board.svg';
import LightThemeIcon from '../assets/images/icon-light-theme.svg';
import DarkThemeIcon from '../assets/images/icon-dark-theme.svg';

import { sidebarBoards } from './temp/SidebarBoards';
import useSearch from '../hooks/useSearch';
import { useTheme } from '../context/ThemeContext';

import { Switch } from '@/components/ui/switch';

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
}

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) => {
  const { theme, toggleTheme } = useTheme();
  const onSideBarHide = () => {
    setIsSidebarOpen(false);
  };

  const { filteredArray, searchQuery, onSearch } = useSearch(sidebarBoards);

  return (
    <aside className={`fixed top-0 left-0 z-40 h-screen`} aria-label="Sidebar navigation">
      <div
        className={`overflow-y-auto py-8 flex flex-col h-full justify-between border-r duration-300 ease-out ${isSidebarOpen ? 'w-[18.75rem]' : 'hidden'} ${
          theme === 'dark' ? 'bg-kanban_grey_800 border-r-kanban_grey_700' : 'bg-white border-gray-200'
        }`}
      >
        {/* SIDEBAR HEADER */}
        <div>
          <header className="mb-14 px-8">
            <Image src={theme === 'dark' ? KanbanLogoDark : KanbanLogoLight} alt="" aria-hidden="true" />
          </header>

          {/* SIDEBAR BOARDS LIST */}
          <div>
            <h2 className="uppercase text-kanban_grey_500 text-xs px-8">All boards ({sidebarBoards.length})</h2>

            <div className="sidebar-search | relative my-6 px-8">
              <Image src={SearchIcon} alt="" aria-hidden="true" className="absolute -translate-y-1/2 top-1/2 pl-3 w-8 h-8" />
              <input
                type="search"
                name="Search"
                placeholder="Search"
                className="border border-gray-300 w-full px-3 py-3 pl-10 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-kanban_purple"
                value={searchQuery}
                onChange={onSearch}
              />
            </div>

            <ul className="text-[0.9375rem] flex flex-col font-bold text-kanban_grey_500">
              {filteredArray.map((board) => (
                <li key={board}>
                  <a
                    href="#"
                    className={`flex items-center gap-4 py-[0.9rem] hover:text-kanban_purple duration-200 ease-out pl-8 mr-6 ${
                      theme === 'dark' ? 'hover:bg-white' : 'hover:bg-kanban_purple_grey_hover'
                    } rounded-r-full`}
                  >
                    <Image src={BoardIcon} alt="" aria-hidden="true" />
                    <span>{board}</span>
                  </a>
                </li>
              ))}
              <li>
                <button
                  className={`flex items-center gap-4 text-kanban_purple px-8 py-[0.9rem] ${
                    theme === 'dark' ? 'hover:bg-white' : 'hover:bg-kanban_purple_grey_hover'
                  } rounded-r-full w-[calc(100%-1.5rem)]`}
                >
                  <Image src={BoardIcon} alt="" aria-hidden="true" />
                  <span>+ Create New Board</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* SIDEBAR FOOTER */}
        <div>
          <form className={`mx-8 rounded-md py-3 flex items-center justify-center gap-4 mb-5 ${theme === 'dark' ? 'bg-kanban_grey_900' : 'bg-kanban_grey_100'}`}>
            <legend className="sr-only">Theme toggle</legend>
            <Image src={LightThemeIcon} alt="" aria-hidden="true" />
            <Switch
              onClick={() => toggleTheme()}
              className="data-[state=checked]:bg-kanban_purple data-[state=unchecked]:bg-kanban_purple dark:focus-visible:ring-kanban_purple dark:focus-visible:ring-offset-kanban_purple focus-visible:ring-kanban_purple dark:data-[state=checked]:bg-kanban-purple dark:data-[state=unchecked]:bg-kanban_purple"
            />
            <Image src={DarkThemeIcon} alt="" aria-hidden="true" />
          </form>
          <button
            onClick={onSideBarHide}
            className={`${
              theme === 'dark' ? 'hover:bg-white' : 'hover:bg-kanban_purple_grey_hover'
            } pl-8 flex items-center gap-4 text-kanban_grey_500 text-[0.9375rem] hover:bg-kanban_purple_grey_hover hover:text-kanban_purple rounded-r-full p-4 duration-200 ease-out tracking-wide w-[calc(100%-1.5rem)]`}
          >
            <Image src={HideSidebarIcon} alt="" aria-hidden="true" />
            <span className="font-bold">Hide Sidebar</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
