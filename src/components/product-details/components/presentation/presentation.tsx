import { PresentationPropsInterface } from './presentation-props.interface';
import './presentation.scss';

export const Presentation = ({imgUrl}: PresentationPropsInterface) => {
  return <div className={'presentationContainer'}>
    <img src={imgUrl} alt={'Product Image'}/>
  </div>
}
