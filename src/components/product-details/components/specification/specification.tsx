import { Details } from './components/details/details';
import { Purchase } from './components/purchase/purchase';
import { Title } from './components/title/title';
import { SpecificationPropsInterface } from './specification-props.interface';
import './specification.scss';

export const Specification = ({product: {id, producer, name, ratingData, price, locations, state, guarantee, additionalFields}}: SpecificationPropsInterface) => {
  return <div className={'specificationContainer'}>
    <Title id={id} producer={producer} name={name} ratingData={ratingData}/>
    <div className={'specificationData'}>
      <Details state={state} guarantee={guarantee} additionalFields={additionalFields}/>
      <Purchase price={price} locations={locations}/>
    </div>
  </div>
}
