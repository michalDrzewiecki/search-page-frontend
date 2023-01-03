import { AiTwotoneStar } from 'react-icons/ai';
import { RatingPropsInterface } from './rating-props.interface';
import './rating.scss';

export const Rating = ({ratingData: {rating, maxRating}}: RatingPropsInterface) => {

  const shouldBeSelected = (value: number): boolean => value < rating;

  const getStarComponent = (value: number) => {
    return <AiTwotoneStar key={value} className={shouldBeSelected(value) ? 'selectedStar' : 'star'}/>
  }

  return <div className={'ratingContainer'}>
    {
      Array.from(Array(maxRating).keys()).map(value => getStarComponent(value))
    }
  </div>
}
