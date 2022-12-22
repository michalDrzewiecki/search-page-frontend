import { ProductPricePropsInterface } from './product-price-props.interface';
import './product-price.scss';

export const ProductPrice = ({currencySymbol, previous, current}: ProductPricePropsInterface) => {

  return <div className={'priceContainer'}>
    <div className={previous ? 'previousPrice' : 'hiddenPreviousPrice'}>
      {previous + ' ' + currencySymbol}
    </div>
    <div className={'currentPrice'}>
      {current + ' ' + currencySymbol}
    </div>
  </div>
}
