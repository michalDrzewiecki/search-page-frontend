import { createAction } from '@reduxjs/toolkit';
import { ReduxStoreActionNameEnum } from '../../../enum';
import { ReduxCategoriesInterface } from '../interfaces';

export const changeCategories = createAction<ReduxCategoriesInterface>(
  ReduxStoreActionNameEnum.categoriesChange
)
