import { transformCurrencyToSymbol } from '../../utils';
import { Image } from './components/image/image';
import { ProductName } from './components/product-name/product-name';
import { ProductPrice } from './components/product-price/product-price';
import { ProductPropsInterface } from './product-props.interface';
import './product.scss';

export const Product = ({product: {imgUrl, name, price: {current, previous, currency}}}: ProductPropsInterface) => {
  const currencySymbol = transformCurrencyToSymbol(currency);
  return <div className={'productContainer'}>
    <div className={'imageContainer'}>
      <Image imgUrl={imgUrl}/>
    </div>
    <div className={'textContainer'}>
      <ProductName name={name}/>
      <ProductPrice current={current} previous={previous} currencySymbol={currencySymbol}/>
    </div>
  </div>
}
