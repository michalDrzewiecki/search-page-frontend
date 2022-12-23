import './sort-selector.scss';
import { useDispatch } from 'react-redux';
import { changeSort } from '../../../../store/redux/actions/filters';
import { DetailsHeaderSelect } from './components/details-header-select/details-header-select';
import { SortSelectorPropsInterface } from './sort-selector-props.interface';

export const SortSelector = ({sortConfig}: SortSelectorPropsInterface) => {
  const dispatch = useDispatch();

  const onValueChange = (value: string): void => {
    const sortOption = sortConfig.find(option => option.name === value);
    if (!sortOption) {
      return;
    }
    const {sortField, sortValue} = sortOption;
    dispatch(changeSort({
      field: sortField,
      value: sortValue
    }));
  }

  const sortOptions = sortConfig.map(sortOption => sortOption.name);

  return <div className={'sortSelector'}>
    <DetailsHeaderSelect options={sortOptions} onValueChange={onValueChange}/>
  </div>
}
