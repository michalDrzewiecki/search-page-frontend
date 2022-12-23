import {
  ReduxFiltersDataInterface,
  ReduxSingleFilterDataInterface,
  ReduxSortDataInterface
} from '../store/redux/interfaces/redux-filters-data.interface';

export const transformFilterDataToQueryParams = (filtersData: ReduxFiltersDataInterface): string => {
  const {filters, sort, search} = filtersData;
  return `${parseSortData(sort)}${parseSearchData(search)}${parseFilterData(filters)}`;
};

const parseSortData = (sortData: ReduxSortDataInterface): string => {
  if (!sortData || !sortData.field || !sortData.value) {
    return '';
  }
  const {field, value} = sortData;
  return `sort=${field}:${value}&`;
};

const parseSearchData = (search: string): string => {
  return search ? `search=${search}&` : '';
};

const parseFilterData = (filtersData: ReduxSingleFilterDataInterface[]): string => {
  if (!filtersData.length) {
    return '';
  }
  let filtersQuery: string = 'filter=';
  filtersData.forEach(singleFilter => {
    const {field, values, operator} = singleFilter;
    filtersQuery += `${field}$${operator}$${values.join(',')}:`;
  });
  return filtersQuery.replace(/.$/,"&");
};
