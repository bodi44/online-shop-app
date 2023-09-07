'use client';

import { useAppSelector } from '@/store';
import { selectAllProductsInCard } from '@/modules/products/products.slice';
import { IProductCardItem } from '@/modules/products/products.types';
import Popup from 'reactjs-popup';
import { useMemo } from 'react';

function AmountSection({ product }: { product: IProductCardItem }) {
  const totalAmount = Object.values(product.amount).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const notNullableAmountItems = Object.entries(product.amount).filter(([_, val]) => val !== 0);
  const totalPrice = useMemo(() => totalAmount * product.price, [product.price, totalAmount]);

  return (
    <li className='mb-4 last:mb-0'>
      <h4 className='font-bold text-md'>{product.name}</h4>
      {notNullableAmountItems.map(([key, val]) => (
        <div key={key} className='mb-2 last:mb-0'>
          <p>
            {val} X ${product.price}
          </p>
          <p>Size: {key}</p>
        </div>
      ))}
      <h5 className='font-bold text-sm'>
        Total: {totalAmount} X ${product.price} = ${totalPrice}
      </h5>
    </li>
  );
}

export default function ProductCardPopup() {
  const products = useAppSelector((state) => selectAllProductsInCard(state.products));

  const overallTotal = useMemo(() => {
    return products
      .map((item) => {
        return Object.values(item.amount).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      })
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }, [products]);

  return (
    <Popup position='bottom right' trigger={<button>My Cart({products.length})</button>}>
      <div className='rounded-lg shadow dark:bg-gray-300 p-4' style={{ width: 300 }}>
        <ul>
          {products.map((item) => (
            <AmountSection key={item.id} product={item} />
          ))}
        </ul>
      </div>
    </Popup>
  );
}
