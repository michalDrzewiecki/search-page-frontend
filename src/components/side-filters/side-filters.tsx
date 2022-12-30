import { useEffect, useState } from 'react';
import { FilterElementType } from '../../config/filters/types';
import { useSelector } from '../../store/redux/useSelector';
import { Filters } from './components/filters/filters';
import {
  SideFiltersCategorySelector
} from './components/side-filters-category-selector/side-filters-category-selector';
import { SideFiltersPropsInterface } from './side-filters-props.interface';
import './side-filters.scss';

export const SideFilters = ({}: SideFiltersPropsInterface) => {
  const [filters, setFilters] = useState<FilterElementType[]>([]);
  const availableFilters = useSelector(state => state.availableFiltersData.availableFilters);

  useEffect(() => {
    setFilters(availableFilters);
  }, [availableFilters]);

  return <div className={'sideFilters'}>
    <div className={'sideFiltersContainer'}>
      <SideFiltersCategorySelector/>
      <Filters filtersConfig={filters}/>
      {/*<ExpandFilters/>*/}
    </div>
  </div>
}
