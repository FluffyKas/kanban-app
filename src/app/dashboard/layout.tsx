'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ShowSidebarButton from '../components/ShowSidebarButton';
import Header from '../components/Header';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="bg-kanban_grey_200 min-h-screen">
      <Header />
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      {!isSidebarOpen && <ShowSidebarButton setIsSidebarOpen={setIsSidebarOpen} />}
    </div>
  );
};

export default DashboardLayout;
