import { PriceInterface } from '../../../../../../interfaces/price-data.interface';

export interface PurchasePropsInterface {
  price: PriceInterface;
  locations: string[];
}
