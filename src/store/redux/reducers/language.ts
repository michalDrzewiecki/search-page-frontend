import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { LanguageEnum } from '../../../enum';
import { changeLanguage } from '../actions/language';
import { ReduxLanguageConfigInterface } from '../interfaces';

export const languageReducer = createReducer({language: LanguageEnum.pl}, (builder) => {
  builder.addCase(
    changeLanguage,
    (state, action: PayloadAction<ReduxLanguageConfigInterface>) => ({
      ...state,
      ...action.payload,
    }),
  );
});
