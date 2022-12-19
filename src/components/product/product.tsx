import { transformCurrencyToSymbol } from '../../utils';
import { Image } from './components/image/image';
import { ProductName } from './components/product-name/product-name';
import { ProductPrize } from './components/product-prize/product-prize';
import { ProductPropsInterface } from './product-props.interface';
import './product.scss';

export const Product = ({product: {imgUrl, name, prize: {current, previous, currency}}}: ProductPropsInterface) => {
  const currencySymbol = transformCurrencyToSymbol(currency);
  return <div className={'productContainer'}>
    <Image imgUrl={imgUrl}/>
    <ProductName name={name}/>
    <ProductPrize current={current} previous={previous} currencySymbol={currencySymbol}/>
  </div>
}
