import productsService from '@/api/service/products-api.service';
import Link from 'next/link';

export default async function Home() {
  const products = await productsService.getAllProducts();
  return (
    <>
      <ul>
        {products.products.map((item) => (
          <li key={item.id}>
            <Link href={`products/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
