import './recommended-list.scss';
import { Product } from '../../../product/product';
import { RecommendedListInterface } from './recommended-list.interface';

export const RecommendedList = ({products}: RecommendedListInterface) => {
  return <div className={'recommendedList'}>
    {
      products.map(product => <Product key={product.id} product={product}/>)
    }
  </div>
}
