import { CurrencyEnum } from '../enum';

const currencyObject = {
  [CurrencyEnum.pln]: 'zł',
}

export const transformCurrencyToSymbol = (currency: CurrencyEnum): string => {
  return currencyObject[currency];
}
