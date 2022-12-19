import { ExpandFilters } from './components/expand-filters/expand-filters';
import { Filters } from './components/filters/filters';
import {
  SideFiltersCategorySelector
} from './components/side-filters-category-selector/side-filters-category-selector';
import './side-filters.scss';

export const SideFilters = () => {
  return <div className={'sideFilters'}>
    <SideFiltersCategorySelector/>
    <Filters/>
    <ExpandFilters/>
  </div>
}
