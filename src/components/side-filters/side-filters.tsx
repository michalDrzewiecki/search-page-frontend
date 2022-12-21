import { ExpandFilters } from './components/expand-filters/expand-filters';
import { Filters } from './components/filters/filters';
import {
  SideFiltersCategorySelector
} from './components/side-filters-category-selector/side-filters-category-selector';
import './side-filters.scss';
import { SideFiltersPropsInterface } from './side-filters-props.interface';

export const SideFilters = ({filtersConfig}: SideFiltersPropsInterface) => {
  const sideFilters = filtersConfig.filter(filterElement => !filterElement.isHidden);

  return <div className={'sideFilters'}>
    <div className={'sideFiltersContainer'}>
      <SideFiltersCategorySelector/>
      <Filters filtersConfig={sideFilters}/>
      <ExpandFilters/>
    </div>
  </div>
}
