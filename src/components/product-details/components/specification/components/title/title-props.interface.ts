import { ProductFieldDataInterface, RatingInterface } from '../../../../../../interfaces';

export interface TitlePropsInterface {
  id: string;
  name: string;
  ratingData: RatingInterface;
  producer: ProductFieldDataInterface;
}
