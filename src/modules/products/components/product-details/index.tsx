'use client';

import { IProductModel } from '@/api/models/product.model';
import Image from 'next/image';
import Button from '@/components/button';
import { useState } from 'react';
import styles from './product-details.module.css';
import {
  addProductToCard,
  selectProductInCardById,
  updateExistingProductInCardById,
} from '@/modules/products/products.slice';
import { EProductSize } from '@/modules/products/products.enums';
import { mapProductModelToProductCardItemUtil } from '@/modules/products/products.utils';
import { useAppDispatch, useAppSelector } from '@/store';

interface IProductDetailsProps {
  product: IProductModel;
}

const SIZES = Object.keys(EProductSize);

export default function ProductDetails({ product }: IProductDetailsProps) {
  const selectedProductInCard = useAppSelector((state) => selectProductInCardById(state.products, product.id));

  const dispatch = useAppDispatch();
  const [selectedSize, setSelectedSize] = useState<EProductSize>(EProductSize.S);

  const handleChangeSize = (size: EProductSize): void => {
    setSelectedSize(size);
  };

  const getAmountInitValue = (selectedSize: EProductSize): Record<EProductSize, number> => {
    const amount = { [EProductSize.S]: 0, [EProductSize.M]: 0, [EProductSize.L]: 0 };
    return { ...amount, [selectedSize]: 1 };
  };

  const handleAddToProductCard = (): void => {
    if (selectedProductInCard) {
      dispatch(
        updateExistingProductInCardById({
          id: selectedProductInCard.id,
          changes: {
            ...selectedProductInCard,
            amount: { ...selectedProductInCard.amount, [selectedSize]: selectedProductInCard.amount[selectedSize] + 1 },
          },
        })
      );
    } else {
      dispatch(addProductToCard(mapProductModelToProductCardItemUtil(product, getAmountInitValue(selectedSize))));
    }
  };

  return (
    <main className='flex w-full m-auto max-w-screen-lg gap-4 pt-4'>
      <div className='w-3/4 relative flex-1'>
        <Image
          src={product.thumbnail}
          alt='Picture of the author'
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </div>

      <aside className='flex-1'>
        <h1 className='text-xl font-normal text-primary'>{product.title}</h1>

        <section className='mt-8'>
          <hr className='border-t border-border-light' />
          <h4 className='p-2'>$ {product.price}</h4>
          <hr className='border-t border-border-light' />
        </section>

        <p className='mt-8 text-base text-secondary'>{product.description}</p>

        <section className='mt-8 mb-8'>
          <span className='uppercase'>
            <span className={styles.requiredText}>SIZE</span>: <strong className='font-bold'>{selectedSize}</strong>
          </span>

          <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
            {SIZES.map((sizeItem) => (
              <Button
                selected={selectedSize === sizeItem}
                type='secondary'
                key={`size-item-${sizeItem}`}
                onClick={() => handleChangeSize(sizeItem as EProductSize)}>
                {sizeItem}
              </Button>
            ))}
          </div>
        </section>

        <Button onClick={handleAddToProductCard}>Add to Cart</Button>
      </aside>
    </main>
  );
}
