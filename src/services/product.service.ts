import config from '../config/config/config';
import { ProductInterface, ResourceResponseInterface } from '../interfaces';
import { HttpRequestService } from './http-request.service';

export class ProductService extends HttpRequestService {

  public async fetchProducts(queryParams: string): Promise<ResourceResponseInterface<ProductInterface>> {
    return this.get<ResourceResponseInterface<ProductInterface>>(`${config.productService.url}/products?${queryParams}`);
  }

  public async fetchRecommendedProducts(queryParams: string): Promise<ProductInterface[]> {
    return this.get<ProductInterface[]>(`${config.productService.url}/products/recommended?${queryParams}`);
  }
}
