import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { changeCategories, changeSelectedCategories, clearAllSelectedCategories } from '../actions/categories';
import {
  ReduxCategoriesDataInterface,
  ReduxCategoriesInterface,
  ReduxSelectedCategoriesInterface
} from '../interfaces';

const initialCategoryData: ReduxCategoriesDataInterface = {
  categories: [],
  selectedCategory: {
    displayName: '',
    name: ''
  },
  selectedSubcategory: {
    displayName: '',
    name: ''
  }
};

export const categoryReducer = createReducer(initialCategoryData, (builder) => {
  builder
    .addCase(
      changeCategories,
      (state, action: PayloadAction<ReduxCategoriesInterface>) => ({
        ...state,
        ...action.payload
      })
    )
    .addCase(
      changeSelectedCategories,
      (state, action: PayloadAction<ReduxSelectedCategoriesInterface>) => ({
        ...state,
        ...action.payload,
      }),
    ).addCase(
      clearAllSelectedCategories,
    (state) => ({
      ...state,
      ...initialCategoryData
    }));
});
