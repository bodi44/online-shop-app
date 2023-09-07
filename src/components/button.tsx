'use client';

import React from 'react';

interface IButtonProps {
  children: React.ReactNode;
  type?: 'primary' | 'secondary';
  selected?: boolean;
  onClick?: () => void;
}

export default function Button({ children, onClick, type = 'primary', selected = false }: IButtonProps) {
  const className =
    type === 'primary'
      ? 'cursor-pointer border-2 border-black py-2 px-6 font-semibold uppercase text-primary duration-200 ease-in-out hover:bg-black hover:text-gray-50'
      : 'cursor-pointer border-2 border-border-light px-4 py-3 text-secondary hover:border-border-dark border-border-dark';

  return (
    <button className={`${className} ${selected ? 'bg-green-700' : ''}`} onClick={onClick}>
      {children}
    </button>
  );
}
