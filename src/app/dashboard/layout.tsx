'use client';

import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import ShowSidebarButton from '../components/ShowSidebarButton';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(defaultDark ? 'dark' : 'light');
    }
  }, []);

  return (
    <>
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} theme={theme} setTheme={setTheme} />
      {!isSidebarOpen && <ShowSidebarButton setIsSidebarOpen={setIsSidebarOpen} />}
    </>
  );
};

export default DashboardLayout;
