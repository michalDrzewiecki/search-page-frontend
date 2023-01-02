import { CurrencyEnum } from '../enum';

export interface PriceInterface {
  current: number;
  previous: number;
  currency: CurrencyEnum;
}
