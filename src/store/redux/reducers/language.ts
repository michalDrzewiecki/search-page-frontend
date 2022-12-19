import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { LanguageEnum } from '../../../enum';
import { LanguageConfigInterface } from '../../../interfaces';
import { changeLanguage } from '../actions/language';

export const languageReducer = createReducer({language: LanguageEnum.pl}, (builder) => {
  builder.addCase(
    changeLanguage,
    (state, action: PayloadAction<LanguageConfigInterface>) => ({
      ...state,
      ...action.payload,
    }),
  );
});
