import { ProductNamePropsInterface } from './product-name-props.interface';
import './product-name.scss';

export const ProductName = ({name}: ProductNamePropsInterface) => {
  const transformName = (name: string): string => {
    const availableCharacters = 30;
    const cutName = name.substring(0, availableCharacters);
    return name.length >= availableCharacters ? `${cutName}...` : cutName;
  }

  return <div className={'productNameContainer'}>
    {transformName(name)}
  </div>
}
