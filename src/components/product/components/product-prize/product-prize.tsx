import { ProductPrizePropsInterface } from './product-prize-props.interface';

export const ProductPrize = ({currencySymbol, previous, current}: ProductPrizePropsInterface) => {

  return <div>
    <div>
      {previous + ' ' + currencySymbol}
    </div>
    <div>
      {current + ' ' + currencySymbol}
    </div>
  </div>
}
