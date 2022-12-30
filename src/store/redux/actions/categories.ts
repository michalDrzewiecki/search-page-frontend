import { createAction } from '@reduxjs/toolkit';
import { ReduxStoreActionNameEnum } from '../../../enum';
import { ReduxCategoriesInterface, ReduxSelectedCategoriesInterface } from '../interfaces';

export const changeCategories = createAction<ReduxCategoriesInterface>(
  ReduxStoreActionNameEnum.categoriesChange
)

export const changeSelectedCategories = createAction<ReduxSelectedCategoriesInterface>(
  ReduxStoreActionNameEnum.selectedCategoriesChange,
);

export const clearAllSelectedCategories = createAction(
  ReduxStoreActionNameEnum.selectedCategoriesClearAll,
);
