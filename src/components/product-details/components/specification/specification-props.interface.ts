import { ProductToDisplayInterface } from '../../../../interfaces';

export interface SpecificationPropsInterface {
  product: Omit<ProductToDisplayInterface, 'imgUrl'>;
}
