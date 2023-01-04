import { availableOperatorsPerFilterTypeConstant } from '../config/filters/constants';
import {
  CheckboxFilterElementInterface,
  RadioFilterElementInterface,
  RangeFilterElementInterface,
  SelectFilterElementInterface
} from '../config/filters/interfaces';
import { FilterElementType } from '../config/filters/types';
import { DEFAULT_PRODUCT_AMOUNT } from '../constants';
import { FilteringKeyWordsEnum, FilteringSeparatorsEnum, FilterOperatorEnum } from '../enum';
import { FilterElementTypeEnum } from '../enum/filter-element-type.enum';
import { ReduxAvailableFiltersInterface } from '../store/redux/interfaces';
import {
  ReduxFiltersDataInterface,
  ReduxSingleFilterDataInterface
} from '../store/redux/interfaces/redux-filters-data.interface';
import { calculateOffsetBasedOnPage } from './calculate-offset-based-on-page';
import { validateRangeInput } from './validate-range-input';

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

const parseSort = (sortData: string, {availableSortOptions}: ReduxAvailableFiltersInterface): Pick<ReduxFiltersDataInterface, 'sort'> | {} => {
  if (!sortData) {
    return {};
  }
  try {
    const [field, value] = sortData.split(FilteringSeparatorsEnum.sortSeparator);
    const numericValue = +value;
    const existingSortOption = availableSortOptions.find(option => option.sortValue === numericValue && option.sortField === field);
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
    values.every(value => validateRangeInput(value, (existingFilter as RangeFilterElementInterface).validation)) &&
    values.length === 2 ? +values[1] >= +values[0] : true
};

const validateMethodData: Record<FilterElementTypeEnum, (values: string[], existingFilter: FilterElementType, operator?: FilterOperatorEnum) => boolean> = {
  [FilterElementTypeEnum.select]: validateSingleFilterOption,
  [FilterElementTypeEnum.radio]: validateSingleFilterOption,
  [FilterElementTypeEnum.checkbox]: validateMultipleFilterOption,
  [FilterElementTypeEnum.range]: validateRangeFilterOption
}

const parseFilter = (filters: string, {availableFilters}: ReduxAvailableFiltersInterface): Pick<ReduxFiltersDataInterface, 'filters'> | {} => {
  if (!filters) {
    return {};
  }
  try {
    const parsedFilters: ReduxSingleFilterDataInterface[] = [];
    filters
      .split(FilteringSeparatorsEnum.filterSeparator)
      .forEach(singleFilterData => {
        const [field, operator, values] = singleFilterData.split(FilteringSeparatorsEnum.operatorSeparator);
        const existingFilter = availableFilters
          .find(singleFilter => singleFilter.filterElementName === field);
        if (existingFilter && availableOperatorsPerFilterTypeConstant[existingFilter.type].includes(operator as FilterOperatorEnum)) {
          const parsedValues = values.split(FilteringSeparatorsEnum.valueSeparator);
          if (validateMethodData[existingFilter.type](parsedValues, existingFilter, operator as FilterOperatorEnum)) {
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

const parseCategory = (category: string): Pick<ReduxFiltersDataInterface, 'selectedCategory'> | {} => {
  if (!category) {
    return {};
  }
  return {selectedCategory: category};
}

const parseSubcategory = (subcategory: string): Pick<ReduxFiltersDataInterface, 'selectedSubcategory'> | {} => {
  if (!subcategory) {
    return {};
  }
  return {selectedSubcategory: subcategory};
}

const queryParamsParseMethods: Record<string, (data: string, availableFilters: ReduxAvailableFiltersInterface) => Record<string, any> >= {
  [FilteringKeyWordsEnum.search]: parseSearch,
  [FilteringKeyWordsEnum.filter]: parseFilter,
  [FilteringKeyWordsEnum.sort]: parseSort,
  [FilteringKeyWordsEnum.page]: parsePage,
  [FilteringKeyWordsEnum.category]: parseCategory,
  [FilteringKeyWordsEnum.subcategory]: parseSubcategory,
  [FilteringKeyWordsEnum.offset]: () => ({}),
  [FilteringKeyWordsEnum.limit]: () => ({}),

};

export const transformQueryParamsToFilterData = (filtersData: Record<string, string>, availableFilters: ReduxAvailableFiltersInterface): ReduxFiltersDataInterface => {
  let parsedFiltersData = {};
  for (const key in filtersData) {
    const parser = queryParamsParseMethods[key as FilteringKeyWordsEnum];
    if (!parser) {
      continue;
    }
    parsedFiltersData = {...parsedFiltersData, ...parser(filtersData[key], availableFilters)}
  }
  return {pagination: {limit: DEFAULT_PRODUCT_AMOUNT, offset: 0}, ...parsedFiltersData} as ReduxFiltersDataInterface;
}
