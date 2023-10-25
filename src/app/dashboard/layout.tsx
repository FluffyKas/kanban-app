'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
  const storedIsSidebarOpen = localStorage.getItem('isSidebarOpen');
  const initialIsSidebarOpen = storedIsSidebarOpen ? JSON.parse(storedIsSidebarOpen) : true;
  const [isSidebarOpen, setIsSidebarOpen] = useState(initialIsSidebarOpen);

  return (
    <div>
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </div>
  );
};

export default DashboardLayout;
