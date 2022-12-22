import { createAction } from '@reduxjs/toolkit';
import { ReduxStoreActionNameEnum } from '../../../enum';
import { ReduxLanguageConfigInterface } from '../interfaces';

export const changeLanguage = createAction<ReduxLanguageConfigInterface>(
  ReduxStoreActionNameEnum.languageChange,
);
