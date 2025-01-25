'use client';

import { ThemeProvider } from '@/context/ThemeContext';
import Header from '@/components/layout/Header';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className="antialiased overflow-x-hidden bg-gray-50 dark:bg-[#0B1121] transition-colors duration-300">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
