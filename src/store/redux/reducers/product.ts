import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { changeProductAmount } from '../actions/product';
import { ReduxProductDataInterface } from '../interfaces';

const initialData: ReduxProductDataInterface = {
  productAmount: 0
}

export const productReducer = createReducer(initialData, (builder) => {
  builder.addCase(
    changeProductAmount,
    (state, action: PayloadAction<number>) => ({
      productAmount: action.payload
    }),
  );
});
