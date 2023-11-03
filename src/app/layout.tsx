'use client';

import type { Metadata } from 'next';
import './assets/styles/globals.css';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ShowSidebarButton from './components/ShowSidebarButton';
import { useState } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <html lang="en">
      <ThemeProvider>
        <body>
          <div className="bg-kanban_grey_200 min-h-screen">
            <Header />
            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            {!isSidebarOpen && <ShowSidebarButton setIsSidebarOpen={setIsSidebarOpen} />}
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
