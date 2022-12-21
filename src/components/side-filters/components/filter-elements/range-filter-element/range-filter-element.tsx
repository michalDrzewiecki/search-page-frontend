import { RangeFilterElementPropsInterface } from './range-filter-element-props.interface';
import './range-filter-element.scss';

export const RangeFilterElement = ({
   params: {
     firstText,
     firstUnit,
     secondText,
     secondUnit
 }}: RangeFilterElementPropsInterface) => {
  return <div className={'rangeFilterContainer'}>
    <div className={'singleRangeContainer'}>
      <input type={'text'} value={firstText} />
    </div>
    <div className={'lineContainer'}>
      <hr className={'line'}/>
    </div>
    <div className={'singleRangeContainer'}>
      <input type={'text'} value={secondText} />
    </div>
  </div>
}
