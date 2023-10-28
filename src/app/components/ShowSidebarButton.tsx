import Image from 'next/image';
import ShowSidebarIcon from '../assets/icon-show-sidebar.svg';

interface ShowSidebarButtonProps {
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
}

const ShowSidebarButton = ({ setIsSidebarOpen }: ShowSidebarButtonProps) => {
  return (
    <button onClick={() => setIsSidebarOpen(true)} className="absolute bottom-8 bg-blue-300 p-8 rounded-r-full">
      <span className="sr-only">Show sidebar</span>
      <Image src={ShowSidebarIcon} alt="" aria-hidden="true" />
    </button>
  );
};

export default ShowSidebarButton;
