import { DEFAULT_PRODUCT_AMOUNT } from '../constants';

export const calculateOffsetBasedOnPage = (page: number): number => {
  return (page - 1) * DEFAULT_PRODUCT_AMOUNT;
}
