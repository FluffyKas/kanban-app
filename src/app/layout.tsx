import type { Metadata } from 'next';
import './assets/styles/globals.css';
import { ThemeProvider } from './context/ThemeContext';

export const metadata: Metadata = {
  title: 'Kanban App',
  description: 'Kanban app for task management',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
