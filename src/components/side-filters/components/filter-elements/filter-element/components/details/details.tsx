import { RxInfoCircled } from 'react-icons/rx';
import { DetailsPropsInterface } from './details-props.interface';
import './details.scss';

export const Details = ({details}: DetailsPropsInterface) => {

  const onDetailsClick = () => {
  };

  return <div className={'detailsContainer'} onClick={onDetailsClick}>
    <RxInfoCircled/>
  </div>
}
