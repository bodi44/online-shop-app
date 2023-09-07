import './globals.css';
import { Inter } from 'next/font/google';
import Head from '@/app/head';
import Header from '@/components/header';
import StoreProvider from '@/providers/store.provider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Head />
      <body className={inter.className}>
        <StoreProvider>
          <Header />
          <main className='p-4'>{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}
