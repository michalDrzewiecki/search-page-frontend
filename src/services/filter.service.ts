import config from '../config/config/config';
import { CategoryInterface, FilterConfigResponseInterface } from '../interfaces';
import { HttpRequestService } from './http-request.service';

export class FilterService extends HttpRequestService {

  public async fetchFilters(queryParams: string): Promise<FilterConfigResponseInterface> {
    return this.get<FilterConfigResponseInterface>(`${config.productService.url}/products/filters?${queryParams}`);
  }
}
