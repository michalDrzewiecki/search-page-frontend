import { ProductFieldDataInterface } from '../../../../../../interfaces';

export interface DetailsPropsInterface {
  guarantee: ProductFieldDataInterface;
  state: ProductFieldDataInterface;
  additionalFields: Record<string, ProductFieldDataInterface>
}
