import { createAction } from '@reduxjs/toolkit';
import { ReduxStoreActionNameEnum } from '../../../enum';
import { ReduxCategoriesInterface } from '../interfaces/redux-categories.interface';

export const changeCategories = createAction<ReduxCategoriesInterface>(
  ReduxStoreActionNameEnum.categoriesChange,
);

export const clearAllCategories = createAction(
  ReduxStoreActionNameEnum.categoriesClearAll,
);
