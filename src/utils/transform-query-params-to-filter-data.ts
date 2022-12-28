import { availableOperatorsPerFilterTypeConstant } from '../config/filters/constants';
import { filterConfig } from '../config/filters/filter-config';
import {
  CheckboxFilterElementInterface,
  RadioFilterElementInterface,
  RangeFilterElementInterface,
  SelectFilterElementInterface
} from '../config/filters/interfaces';
import { FilterElementType } from '../config/filters/types';
import { sortConfig } from '../config/sort/sort-config';
import { DEFAULT_PRODUCT_AMOUNT } from '../constants';
import { FilteringKeyWordsEnum, FilteringSeparatorsEnum, FilterOperatorEnum } from '../enum';
import { FilterElementTypeEnum } from '../enum/filter-element-type.enum';
import {
  ReduxFiltersDataInterface,
  ReduxSingleFilterDataInterface
} from '../store/redux/interfaces/redux-filters-data.interface';
import { calculateOffsetBasedOnPage } from './calculate-offset-based-on-page';

const parsePage = (page: string): Pick<ReduxFiltersDataInterface, 'pagination'> | {} => {
  const numericPageValue = +page;
  if (isNaN(numericPageValue) || numericPageValue < 1) {
    return {};
  }
  return {
    pagination: {
      offset: calculateOffsetBasedOnPage(numericPageValue),
      limit: DEFAULT_PRODUCT_AMOUNT
    }};
}

const parseSort = (sortData: string): Pick<ReduxFiltersDataInterface, 'sort'> | {} => {
  if (!sortData) {
    return {};
  }
  try {
    const [field, value] = sortData.split(FilteringSeparatorsEnum.sortSeparator);
    const numericValue = +value;
    const existingSortOption = sortConfig().find(option => option.sortValue === numericValue && option.sortField === field);
    if (!existingSortOption) {
      return {};
    }
    return {sort: {field, value: numericValue}};
  } catch (e) {
    return {};
  }
}

const validateSingleFilterOption = (values: string[], existingFilter: FilterElementType): boolean => {
  return values.length === 1 && (existingFilter as SelectFilterElementInterface | RadioFilterElementInterface).options.map(option => option.value).includes(values[0]);
};

const validateMultipleFilterOption = (values: string[], existingFilter: FilterElementType) => {
  const existingFilterOptions = (existingFilter as CheckboxFilterElementInterface).options.map(option => option.value);
  return values.length > 0 && values.every(value => existingFilterOptions.includes(value));
};

const validateRangeFilterOption = (values: string[], existingFilter: FilterElementType) => {
  return values.length <= 2 &&
    values.length > 0 &&
    values.every(value => (existingFilter as RangeFilterElementInterface).validation(value)) &&
    values.length === 2 ? +values[1] >= +values[0] : true
};

const validateMethodData: Record<FilterElementTypeEnum, (values: string[], existingFilter: FilterElementType, operator?: FilterOperatorEnum) => boolean> = {
  [FilterElementTypeEnum.select]: validateSingleFilterOption,
  [FilterElementTypeEnum.radio]: validateSingleFilterOption,
  [FilterElementTypeEnum.checkbox]: validateMultipleFilterOption,
  [FilterElementTypeEnum.range]: validateRangeFilterOption
}

const parseFilter = (filters: string): Pick<ReduxFiltersDataInterface, 'filters'> | {} => {
  if (!filters) {
    return {};
  }
  try {
    const parsedFilters: ReduxSingleFilterDataInterface[] = [];
    filters
      .split(FilteringSeparatorsEnum.filterSeparator)
      .forEach(singleFilterData => {
        const [field, operator, values] = singleFilterData.split(FilteringSeparatorsEnum.operatorSeparator);
        const existingFilter = filterConfig()
          .find(singleFilter => singleFilter.filterElementName === field);
        if (existingFilter && availableOperatorsPerFilterTypeConstant[existingFilter.type].includes(operator as FilterOperatorEnum)) {
          const parsedValues = values.split(FilteringSeparatorsEnum.valueSeparator);
          if (validateMethodData[existingFilter.type](parsedValues, existingFilter, operator as FilterOperatorEnum)) {
            console.log('jestem do uja wafelka');
            parsedFilters.push({
              operator: operator as FilterOperatorEnum,
              field,
              values: parsedValues
            })
          }
        }
      });
    return {filters: parsedFilters};
  } catch (e) {
    return {};
  }
}

const parseSearch = (search: string): Pick<ReduxFiltersDataInterface, 'search'> | {} => {
  if (!search) {
    return {};
  }
  return {search: search};
}

const queryParamsParseMethods: Record<FilteringKeyWordsEnum, (data: string) => Record<string, any> >= {
  [FilteringKeyWordsEnum.search]: parseSearch,
  [FilteringKeyWordsEnum.filter]: parseFilter,
  [FilteringKeyWordsEnum.sort]: parseSort,
  [FilteringKeyWordsEnum.page]: parsePage,
  [FilteringKeyWordsEnum.offset]: () => ({}),
  [FilteringKeyWordsEnum.limit]: () => ({}),

};

export const transformQueryParamsToFilterData = (filtersData: Record<string, string>): ReduxFiltersDataInterface => {
  let parsedFiltersData = {};
  for (const key in filtersData) {
    const parser = queryParamsParseMethods[key as FilteringKeyWordsEnum];
    if (!parser) {
      continue;
    }
    parsedFiltersData = {...parsedFiltersData, ...parser(filtersData[key])}
  }
  return parsedFiltersData as ReduxFiltersDataInterface;
}
