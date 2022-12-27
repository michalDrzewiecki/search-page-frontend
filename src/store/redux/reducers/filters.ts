import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_PRODUCT_AMOUNT } from '../../../constants';
import { SortValuesEnum } from '../../../enum';
import {
  changeAllFiltersData,
  changeFilters,
  changeOffset,
  changeSearch,
  changeSort,
  clearAllFilters,
  clearFilter, clearSort
} from '../actions/filters';
import {
  ReduxFiltersDataInterface, ReduxPaginationDataInterface,
  ReduxSingleFilterDataInterface,
  ReduxSortDataInterface
} from '../interfaces/redux-filters-data.interface';

const defaultPaginationData: ReduxPaginationDataInterface = {
  limit: DEFAULT_PRODUCT_AMOUNT,
  offset: 0
};

const defaultSortData: ReduxSortDataInterface = {
  field: '',
  value: SortValuesEnum.ascending
}

const initialData: ReduxFiltersDataInterface = {
  filters: [],
  sort: defaultSortData,
  search: '',
  pagination: defaultPaginationData
};

export const filtersReducer = createReducer(initialData, (builder) => {
  builder
    .addCase(
      changeFilters,
      (state, action: PayloadAction<ReduxSingleFilterDataInterface>) => {
        const filters = JSON.parse(JSON.stringify(state.filters)) as ReduxSingleFilterDataInterface[];
        const fieldFilter = filters.find(singleFilter => singleFilter.field === action.payload.field);
        if (!fieldFilter) {
          filters.push(action.payload)
        } else {
          fieldFilter.operator = action.payload.operator;
          fieldFilter.values = action.payload.values;
        }
        return {
          ...state,
          filters,
          pagination: defaultPaginationData
        }
      }
    )
    .addCase(
      clearAllFilters,
      (state) => ({
        ...state,
        filters: [],
        pagination: defaultPaginationData
      })
    )
    .addCase(
      clearFilter,
      (state, action: PayloadAction<string>) => {
        const filters = JSON.parse(JSON.stringify(state.filters)) as ReduxSingleFilterDataInterface[];
        const singleFilterIndex = filters.findIndex(singleFilter => singleFilter.field === action.payload);
        if (singleFilterIndex === -1) {
          return {
            ...state
          };
        }
        filters.splice(singleFilterIndex, 1);
        return {
          ...state,
          filters,
          pagination: defaultPaginationData
        }
      }
    )
    .addCase(
      changeSearch,
      (state, action: PayloadAction<string>) => ({
        ...state,
        search: action.payload,
        pagination: defaultPaginationData
      })
    )
    .addCase(
      changeSort,
      (state, action: PayloadAction<ReduxSortDataInterface>) => ({
        ...state,
        sort: action.payload
      })
    ).addCase(
      changeOffset,
    (state, action: PayloadAction<number>) => ({
        ...state,
        pagination: {
          limit: DEFAULT_PRODUCT_AMOUNT,
          offset: action.payload
        }
      })
    ).addCase(
      changeAllFiltersData,
      (state, action: PayloadAction<ReduxFiltersDataInterface>) => ({
        ...state,
        ...action.payload
      })
    ).addCase(
    clearSort,
    (state) => ({
      ...state,
      sort: defaultSortData
    })
  );
});
