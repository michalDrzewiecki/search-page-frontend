import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { changeCategories } from '../actions/categories';
import {
  ReduxCategoriesDataInterface,
  ReduxCategoriesInterface,
} from '../interfaces';

const initialCategoryData: ReduxCategoriesDataInterface = {
  categories: []
};

export const categoryReducer = createReducer(initialCategoryData, (builder) => {
  builder
    .addCase(
      changeCategories,
      (state, action: PayloadAction<ReduxCategoriesInterface>) => ({
        ...state,
        ...action.payload
      })
    );
});
