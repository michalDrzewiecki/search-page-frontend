import { AiOutlineShop } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import { LocationsPropsInterface } from './locations-props.interface';
import './locations.scss';

export const Locations = ({locations, translations}: LocationsPropsInterface) => {
  return <div className={'locationsContainer'}>
    <div className={'iconContainer'}>
      <AiOutlineShop/>
    </div>
    <div className={'textContainer'}>
      <a>{translations.availableInText}</a>
      <div className={'specificLocations'}>
        {
          locations.map((location, index) => <div key={location} className={'locationContainer'}>
            {index !== 0 ? <BsDot className={'dotIconContainer'}/> : null}
            <a className={'locationName'}>{location}</a>
          </div>)
        }
      </div>

    </div>
  </div>
}
