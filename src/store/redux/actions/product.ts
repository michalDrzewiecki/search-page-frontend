import { createAction } from '@reduxjs/toolkit';
import { ReduxStoreActionNameEnum } from '../../../enum';

export const changeProductAmount = createAction<number>(
  ReduxStoreActionNameEnum.productAmountChange,
);
