import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { changeAvailableFilters } from '../actions/available-filters';
import { ReduxAvailableFiltersInterface } from '../interfaces';

const initialAvailableFiltersData: ReduxAvailableFiltersInterface = {
  availableFilters: [],
  availableSortOptions: []
};

export const availableFiltersReducer = createReducer(initialAvailableFiltersData, (builder) => {
  builder
    .addCase(
      changeAvailableFilters,
      (state, action: PayloadAction<ReduxAvailableFiltersInterface>) => ({
        ...state,
        ...action.payload
      })
    );
});
