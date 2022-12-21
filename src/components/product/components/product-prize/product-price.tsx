import { ProductPricePropsInterface } from './product-price-props.interface';
import './product-price.scss';

export const ProductPrice = ({currencySymbol, previous, current}: ProductPricePropsInterface) => {

  return <div>
    <div className={'previousPrice'}>
      {previous + ' ' + currencySymbol}
    </div>
    <div className={'currentPrice'}>
      {current + ' ' + currencySymbol}
    </div>
  </div>
}
