import { createAction } from '@reduxjs/toolkit';
import { ReduxStoreActionNameEnum } from '../../../enum/redux-store-action-name.enum';
import { LanguageConfigInterface } from '../../../interfaces';

export const changeLanguage = createAction<LanguageConfigInterface>(
  ReduxStoreActionNameEnum.languageChange,
);
