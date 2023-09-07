import { IPaginationModel } from '@/api/models/pagination.model';

export interface IProductModel {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface IPaginatedProductsModel extends IPaginationModel {
  products: IProductModel[];
}
