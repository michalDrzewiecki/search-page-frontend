import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { AvailabilityPropsInterface } from './availability-props.interface';
import './availability.scss';

export const Availability = ({isAvailable, translations}: AvailabilityPropsInterface) => {
  return <div className={'availabilityContainer'}>
    <div className={isAvailable ? 'iconContainer' : 'iconContainerUnavailable'}>
      {isAvailable ? <AiOutlineCheckCircle/> : <AiOutlineCloseCircle/>}
    </div>
    <div className={'textContainer'}>
      <a className={isAvailable ? 'textAvailable' : 'textUnavailable'}>{isAvailable ? translations.availableText : translations.unavailableText}</a>
    </div>
  </div>
}
