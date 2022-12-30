import { FilterElementType } from '../../../config/filters/types';
import { SortOptionInterface } from '../../../config/sort/interfaces';

export interface ReduxAvailableFiltersInterface {
  availableFilters: FilterElementType[];
  availableSortOptions: SortOptionInterface[];
}
