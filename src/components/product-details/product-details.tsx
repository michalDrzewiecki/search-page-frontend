import { ProductDetailsPropsInterface } from './product-details-props.interface';
import './product-details.scss';

export const ProductDetails = ({product}: ProductDetailsPropsInterface) => {

  return <div>
    {product.name}
    {product.producer.value}
  </div>
}
