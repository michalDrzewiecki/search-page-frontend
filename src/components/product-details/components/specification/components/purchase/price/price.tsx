import { transformCurrencyToSymbol } from '../../../../../../../utils';
import { PricePropsInterface } from './price-props.interface';
import './price.scss';

export const Price = ({price: {current, currency, previous}, translations}: PricePropsInterface) => {
  const buildPrice = (price: number): string => `${price} ${transformCurrencyToSymbol(currency)}`;

  const calculateDifference = (): number => previous - current;

  return <div className={'productPriceContainer'}>
    <div className={'safeDataContainer'}>
      {previous ? <a className={'differenceInPrice'}>{`${translations.saveText} ${buildPrice(calculateDifference())}`}</a> : null}
    </div>
    <div className={'priceDataContainer'}>
      {previous ? <a className={'previousPrice'}>{buildPrice(previous)}</a> : null}
      <a className={'currentPrice'}>{buildPrice(current)}</a>
    </div>
  </div>
}
