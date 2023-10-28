'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ShowSidebarButton from '../components/ShowSidebarButton';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  console.log(isSidebarOpen);

  return (
    <>
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      {!isSidebarOpen && <ShowSidebarButton setIsSidebarOpen={setIsSidebarOpen} />}
    </>
  );
};

export default DashboardLayout;
