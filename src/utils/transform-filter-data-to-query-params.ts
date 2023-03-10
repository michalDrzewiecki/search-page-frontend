import { FilteringKeyWordsEnum, FilteringSeparatorsEnum } from '../enum';
import {
  ReduxFiltersDataInterface,
  ReduxPaginationDataInterface,
  ReduxSingleFilterDataInterface,
  ReduxSortDataInterface
} from '../store/redux/interfaces/redux-filters-data.interface';

export const transformFilterDataToQueryParams = (
  filtersData: ReduxFiltersDataInterface
): string => {
  const {filters, sort, search, pagination} = filtersData;
  return `${parseSortData(sort)}${parseSearchData(search)}${parseFilterData(filters)}${parsePaginationData(pagination)}${parseCategoryData(filtersData.selectedCategory, filtersData.selectedSubcategory)}`;
};

const parseSortData = (sortData: ReduxSortDataInterface): string => {
  if (!sortData || !sortData.field || !sortData.value) {
    return '';
  }
  const {field, value} = sortData;
  return `${FilteringKeyWordsEnum.sort}=${field}${FilteringSeparatorsEnum.sortSeparator}${value}&`;
};

const parseSearchData = (search: string): string => {
  return search ? `${FilteringKeyWordsEnum.search}=${search}&` : '';
};

const parseFilterData = (filtersData: ReduxSingleFilterDataInterface[]): string => {
  if (!filtersData.length) {
    return '';
  }
  let filtersQuery: string = `${FilteringKeyWordsEnum.filter}=`;
  filtersData.forEach(singleFilter => {
    const {field, values, operator} = singleFilter;
    filtersQuery += `${field}${FilteringSeparatorsEnum.operatorSeparator}${operator}${FilteringSeparatorsEnum.operatorSeparator}${values.join(FilteringSeparatorsEnum.valueSeparator)}${FilteringSeparatorsEnum.filterSeparator}`;
  });
  return filtersQuery.replace(/.$/,"&");
};

const parsePaginationData = ({limit, offset}: ReduxPaginationDataInterface): string => {
  return `${FilteringKeyWordsEnum.limit}=${limit}&${FilteringKeyWordsEnum.offset}=${offset}&`
};

const parseCategoryData = (selectedCategory: string, selectedSubcategory: string): string => {
  const selectedCategoryParam = selectedCategory ? `category=${selectedCategory}&` : '';
  const selectedSubcategoryParam = selectedSubcategory? `subcategory=${selectedSubcategory}&` : '';
  return `${selectedCategoryParam}${selectedSubcategoryParam}`;
}
