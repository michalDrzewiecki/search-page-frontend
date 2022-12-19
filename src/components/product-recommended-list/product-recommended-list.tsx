import './product-recommended-list.scss';
import { RecommendedList } from './components/recommended-list/recommended-list';
import { TitleHeader } from './components/title-header/title-header';

export const ProductRecommendedList = () => {
  return <div className={'productRecommendedList'}>
    <TitleHeader/>
    <RecommendedList/>
  </div>
}
