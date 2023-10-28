'use client';

import Image from 'next/image';

import KanbanLogoLight from '../assets/logo-light.svg';
import KanbanLogoDark from '../assets/logo-dark.svg';
import HideSidebarIcon from '../assets/icon-hide-sidebar.svg';
import SearchIcon from '../assets/icon-search.svg';
import BoardIcon from '../assets/icon-board.svg';

import { sidebarBoards } from './temp/SidebarBoards';
import useSearch from '../hooks/useSearch';

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
}

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) => {
  const onSideBarHide = () => {
    setIsSidebarOpen(false);
  };

  console.log(isSidebarOpen);

  const { filteredArray, searchQuery, onSearch } = useSearch(sidebarBoards);

  return (
    <aside className={`fixed top-0 left-0 z-40 h-screen`} aria-label="Sidebar navigation">
      <div
        className={`overflow-y-auto py-8 flex flex-col h-full justify-between bg-white border-r border-gray-200 duration-300 ease-out px-8 ${
          isSidebarOpen ? 'w-[18.75rem]' : 'hidden'
        }`}
      >
        {/* SIDEBAR HEADER */}
        <header>
          <Image src={KanbanLogoLight} alt="" aria-hidden="true" />
        </header>

        {/* SIDEBAR BOARDS LIST */}
        <div>
          <h2 className="uppercase">All boards</h2>

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
