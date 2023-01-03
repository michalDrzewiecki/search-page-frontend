import { ImagePropsInterface } from './image-props.interface';
import './image.scss';

export const Image = ({imgUrl}: ImagePropsInterface) => {
  return <div>
    <img src={imgUrl} alt={'Product Image'}/>
  </div>
}
