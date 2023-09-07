import { IPaginatedProductsModel, IProductModel } from '@/api/models/product.model';
import { BASE_API_URL } from '@/constants';

class ProductsApiService {
  constructor(private readonly baseUrl: string) {}

  public async getAllProducts(): Promise<IPaginatedProductsModel> {
    const res = await fetch(this.baseUrl);
    return res.json();
  }

  public async getProductById(id: number): Promise<IProductModel> {
    const res = await fetch(`${this.baseUrl}/${id}`);
    return res.json();
  }
}

const productsService = new ProductsApiService(`${BASE_API_URL}/products`);
export default productsService;
