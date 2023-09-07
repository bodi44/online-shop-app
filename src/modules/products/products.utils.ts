import { IProductCardItem } from '@/modules/products/products.types';
import { IProductModel } from '@/api/models/product.model';
import { EProductSize } from '@/modules/products/products.enums';

export function mapProductModelToProductCardItemUtil(
  item: IProductModel,
  amount: Record<EProductSize, number>
): IProductCardItem {
  return {
    id: item.id,
    name: item.title,
    price: item.price,
    amount,
  };
}
