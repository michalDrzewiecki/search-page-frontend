import './title.scss'
import { Rating } from './rating/rating';
import { SubTitleData } from './sub-title-data/sub-title-data';
import { TitlePropsInterface } from './title-props.interface';

export const Title = ({name, ratingData, id, producer}: TitlePropsInterface) => {
  return <div className={'titleContainer'}>
    <div className={'titleNameContainer'}>
      <a className={'titleName'}>{name}</a>
    </div>
    <Rating ratingData={ratingData}/>
    <SubTitleData id={id} producer={producer}/>
  </div>
}
