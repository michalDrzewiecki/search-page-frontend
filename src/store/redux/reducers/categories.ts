import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { changeCategories, clearAllCategories } from '../actions/categories';
import { ReduxCategoriesInterface } from '../interfaces/redux-categories.interface';

const initialCategoryData: ReduxCategoriesInterface = {
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
        ...action.payload,
      }),
    ).addCase(clearAllCategories,
    (state) => ({
      ...state,
      ...initialCategoryData
    }));
});
