import { FilterOperatorEnum, SortValuesEnum } from '../../../enum';

export interface ReduxSortDataInterface {
  field: string;
  value: SortValuesEnum;
}

export interface ReduxSingleFilterDataInterface {
  field: string;
  operator: FilterOperatorEnum;
  values: string[];
}

export interface ReduxPaginationDataInterface {
  limit: number;
  offset: number;
}

export interface ReduxFiltersDataInterface {
  filters: ReduxSingleFilterDataInterface[];
  sort: ReduxSortDataInterface;
  search: string;
  pagination: ReduxPaginationDataInterface;
}
