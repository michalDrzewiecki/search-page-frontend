import { DEFAULT_PRODUCT_AMOUNT } from '../constants';

export const calculatePageBasedOnOffset = (offset: number): number => {
  return offset / DEFAULT_PRODUCT_AMOUNT + 1;
}
