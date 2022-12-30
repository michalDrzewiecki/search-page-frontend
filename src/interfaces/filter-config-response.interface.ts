import { FilterElementType } from '../config/filters/types';
import { SortOptionInterface } from '../config/sort/interfaces';

export interface FilterConfigResponseInterface {
  filters: FilterElementType[];
  sort: SortOptionInterface[];
}
