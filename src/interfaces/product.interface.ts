import { PrizeInterface } from './prize-data.interface';

export interface ProductInterface {
  id: string;
  imgUrl: string;
  name: string;
  prize: PrizeInterface;
}
