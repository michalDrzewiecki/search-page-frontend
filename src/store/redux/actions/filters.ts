import { createAction } from '@reduxjs/toolkit';
import { ReduxStoreActionNameEnum } from '../../../enum';
import {
  ReduxFiltersDataInterface,
  ReduxSelectedCategoriesDataInterface,
  ReduxSingleFilterDataInterface,
  ReduxSortDataInterface
} from '../interfaces/redux-filters-data.interface';

export const changeAllFiltersData = createAction<ReduxFiltersDataInterface>(
  ReduxStoreActionNameEnum.allFiltersDataChange
)

export const changeFilters = createAction<ReduxSingleFilterDataInterface>(
  ReduxStoreActionNameEnum.filtersChange,
);

export const clearAllFilters = createAction(
  ReduxStoreActionNameEnum.filtersClearAll
)

export const clearFilter = createAction<string>(
  ReduxStoreActionNameEnum.filterClear
)

export const changeSearch = createAction<string>(
  ReduxStoreActionNameEnum.searchChange
);

export const changeSort = createAction<ReduxSortDataInterface>(
  ReduxStoreActionNameEnum.sortChange
);

export const clearSort = createAction(
  ReduxStoreActionNameEnum.sortClear
);

export const changeOffset = createAction<number>(
  ReduxStoreActionNameEnum.offsetChange
);

export const changeSelectedCategories = createAction<ReduxSelectedCategoriesDataInterface>(
  ReduxStoreActionNameEnum.selectedCategoriesChange
);

export const clearAllSelectedCategories = createAction(
  ReduxStoreActionNameEnum.selectedCategoriesClearAll
);

export const clearFiltersData = createAction(
  ReduxStoreActionNameEnum.filtersDataClear
);

