import { CategoryTitlePropsInterface } from './category-title-props.interface';
import './category-title.scss';

export const CategoryTitle = ({displayName, count, isActive, handleTitleClick}: CategoryTitlePropsInterface) => {
  return <div className={'categoryTitleContainer'}>
    <a
      className={isActive ? 'categoryTitleActive' : 'categoryTitle'}
      onClick={() => handleTitleClick(displayName)}
    >{displayName}</a>
    {count ? <a className={'productAmount'}>{` (${count})`}</a> : null}
  </div>
}
