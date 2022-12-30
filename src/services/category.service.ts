import config from '../config/config/config';
import { CategoryInterface } from '../interfaces';
import { HttpRequestService } from './http-request.service';

export class CategoryService extends HttpRequestService {

  public async fetchCategories(queryParams: string): Promise<CategoryInterface[]> {
    return this.get<CategoryInterface[]>(`${config.productService.url}/products/categories?${queryParams}`);
  }
}
