import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { SortValuesEnum } from '../../../enum';
import { changeFilters, changeSearch, changeSort, clearAllFilters, clearFilter } from '../actions/filters';
import {
  ReduxFiltersDataInterface,
  ReduxSingleFilterDataInterface,
  ReduxSortDataInterface
} from '../interfaces/redux-filters-data.interface';

const initialData: ReduxFiltersDataInterface = {
  filters: [],
  sort: {
    field: '',
    value: SortValuesEnum.ascending
  },
  search: ''
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
          filters
        }
      }
    )
    .addCase(
      clearAllFilters,
      (state) => ({
        ...state,
        filters: []
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
          filters
        }
      }
    )
    .addCase(
      changeSearch,
      (state, action: PayloadAction<string>) => ({
        ...state,
        search: action.payload
      })
    )
    .addCase(
      changeSort,
      (state, action: PayloadAction<ReduxSortDataInterface>) => ({
        ...state,
        sort: action.payload
      })
    );
});
