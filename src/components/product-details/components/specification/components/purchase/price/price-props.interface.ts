import { ProductDetailsData } from '../../../../../../../interfaces';
import { PriceInterface } from '../../../../../../../interfaces/price-data.interface';

export interface PricePropsInterface {
  price: PriceInterface;
  translations: ProductDetailsData;
}
