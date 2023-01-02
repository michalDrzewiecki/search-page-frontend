import config from '../config/config/config';
import { ProductInterface, ProductToDisplayInterface, ResourceResponseInterface } from '../interfaces';
import { HttpRequestService } from './http-request.service';

export class ProductService extends HttpRequestService {

  public async fetchProduct(id: string, queryParams: string): Promise<ProductToDisplayInterface> {
    return this.get<ProductToDisplayInterface>(`${config.productService.url}/products/single/${id}?${queryParams}`);
  }

  public async fetchProducts(queryParams: string): Promise<ResourceResponseInterface<ProductInterface>> {
    return this.get<ResourceResponseInterface<ProductInterface>>(`${config.productService.url}/products?${queryParams}`);
  }

  public async fetchRecommendedProducts(queryParams: string): Promise<ProductInterface[]> {
    return this.get<ProductInterface[]>(`${config.productService.url}/products/recommended?${queryParams}`);
  }
}
