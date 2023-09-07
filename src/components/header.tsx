'use client';

import Link from 'next/link';
import ProductCardPopup from '@/modules/products/components/product-card-popup';

export default function Header() {
  return (
    <header className='flex justify-between items-center p-4 bg-slate-200'>
      <h1 className='text-3xl font-bold mb-2'>
        <Link href='/'>Mini Online Shopping App</Link>
      </h1>

      <ProductCardPopup />
    </header>
  );
}
