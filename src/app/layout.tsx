'use client';

import { ThemeProvider } from '@/context/ThemeContext'
import Header from '@/components/layout/Header'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className="bg-white dark:bg-[#0B1121] antialiased overflow-x-hidden">
        <ThemeProvider>
          <Header />
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}