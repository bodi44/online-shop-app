import { redirect } from 'next/navigation';
import productsService from '@/api/service/products-api.service';
import ProductDetails from '../../../modules/products/components/product-details';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params?.id;
  if (!id) {
    redirect('/');
  }

  const product = await productsService.getProductById(Number(id));
  if (!product) {
    redirect('/');
  }

  return <ProductDetails product={product} />;
}
