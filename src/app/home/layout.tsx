'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';

const HomeLayout = () => {
  const storedIsSidebarOpen = localStorage.getItem('isSidebarOpen');
  const initialIsSidebarOpen = storedIsSidebarOpen ? JSON.parse(storedIsSidebarOpen) : true;
  const [isSidebarOpen, setIsSidebarOpen] = useState(initialIsSidebarOpen);

  return (
    <div>
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </div>
  );
};

export default HomeLayout;
