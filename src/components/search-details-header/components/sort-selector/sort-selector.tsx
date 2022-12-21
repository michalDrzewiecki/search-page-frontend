import './sort-selector.scss';
import { DetailsHeaderSelect } from './components/details-header-select/details-header-select';
import { SortSelectorPropsInterface } from './sort-selector-props.interface';

export const SortSelector = ({sortConfig}: SortSelectorPropsInterface) => {

  const sortOptions = sortConfig.map(sortOption => sortOption.name);

  return <div className={'sortSelector'}>
    <DetailsHeaderSelect options={sortOptions}/>
  </div>
}
