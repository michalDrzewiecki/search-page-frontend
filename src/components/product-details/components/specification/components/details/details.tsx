import './details.scss';
import { Detail } from './components/detail/detail';
import { DetailsPropsInterface } from './details-props.interface';

export const Details = ({state, guarantee, additionalFields}: DetailsPropsInterface) => {
  return <div className={'productSingleDetailsContainer'}>
    <div className={'detailsBox'}>
      {
        Object.keys(additionalFields).map(key => <Detail key={key} detail={additionalFields[key]}/>)
      }
      <Detail key={state.displayName} detail={state}/>
      <Detail key={guarantee.displayName} detail={guarantee}/>
    </div>
  </div>
}
