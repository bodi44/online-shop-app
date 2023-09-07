import { EProductSize } from '@/modules/products/products.enums';

export interface IProductCardItem {
  id: number;
  name: string;
  price: number;
  amount: Record<EProductSize, number>;
}

export type TUpdateProductCardItemPayload = Omit<IProductCardItem, 'id'>;
