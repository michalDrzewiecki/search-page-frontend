import { CurrencyEnum } from '../enum';

export interface PrizeInterface {
  current: number;
  previous: number;
  currency: CurrencyEnum;
}
