import './header.scss';
import { CategorySelector } from './components/category-selector/category-selector';
import { Search } from './components/search/search';

export const Header = () => {
  return <div className={'header'}>
    <CategorySelector/>
    <Search/>
  </div>
}
