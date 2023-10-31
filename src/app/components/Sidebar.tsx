'use client';

import Image from 'next/image';

import KanbanLogoLight from '../assets/images/logo-light.svg';
import KanbanLogoDark from '../assets/images/logo-dark.svg';
import HideSidebarIcon from '../assets/images/icon-hide-sidebar.svg';
import SearchIcon from '../assets/images/icon-search.svg';
import BoardIcon from '../assets/images/icon-board.svg';

import { sidebarBoards } from './temp/SidebarBoards';
import useSearch from '../hooks/useSearch';

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
  theme: string;
  setTheme: (theme: string) => void;
}

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, theme, setTheme }: SidebarProps) => {
  const onSideBarHide = () => {
    setIsSidebarOpen(false);
  };

  const { filteredArray, searchQuery, onSearch } = useSearch(sidebarBoards);

  return (
    <aside className={`fixed top-0 left-0 z-40 h-screen`} aria-label="Sidebar navigation">
      <div
        className={`overflow-y-auto py-8 flex flex-col h-full justify-between border-r border-gray-200 duration-300 ease-out px-8 ${isSidebarOpen ? 'w-[18.75rem]' : 'hidden'} ${
          theme === 'dark' ? 'bg-dark' : 'bg-white'
        }`}
      >
        {/* SIDEBAR HEADER */}
        <header>
          <Image src={theme === 'dark' ? KanbanLogoDark : KanbanLogoLight} alt="" aria-hidden="true" />
        </header>

        {/* SIDEBAR BOARDS LIST */}
        <div>
          <h2 className="uppercase">All boards ({sidebarBoards.length})</h2>

          <div className="sidebar-search | relative my-6">
            <Image src={SearchIcon} alt="" aria-hidden="true" className="absolute -translate-y-1/2 top-1/2 pl-3 w-8 h-8" />
            <input
              type="search"
              name="Search"
              placeholder="Search"
              className="border border-gray-300 w-full px-3 py-3 pl-10 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
              value={searchQuery}
              onChange={onSearch}
            />
          </div>

          <ul>
            {filteredArray.map((board) => (
              <li key={board}>
                <a href="#" className="flex items-center gap-4">
                  <Image src={BoardIcon} alt="" aria-hidden="true" />
                  <span>{board}</span>
                </a>
              </li>
            ))}
            <li className="flex items-center gap-4">
              <Image src={BoardIcon} alt="" aria-hidden="true" />
              <span>+ Create New Board</span>
            </li>
          </ul>
        </div>

        {/* SIDEBAR FOOTER */}
        <div>
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="p-2 mb-6 text-white bg-kanban_purple rounded-md">
            Toggle theme
          </button>
          <button onClick={onSideBarHide} className="flex items-center gap-4">
            <Image src={HideSidebarIcon} alt="" aria-hidden="true" />
            <span>Hide Sidebar</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
