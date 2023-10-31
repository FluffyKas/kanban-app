import type { Metadata } from 'next';
import './assets/styles/globals.css';
import './assets/styles/themes.css';

export const metadata: Metadata = {
  title: 'Kanban App',
  description: 'Kanban app for task management',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
