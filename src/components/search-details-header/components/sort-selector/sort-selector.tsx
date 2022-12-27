import './sort-selector.scss';
import { useDispatch } from 'react-redux';
import { changeSort, clearSort } from '../../../../store/redux/actions/filters';
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
    value ?
      dispatch(changeSort({
        field: sortField,
        value: sortValue
      })) :
      dispatch(clearSort());
  }

  return <div className={'sortSelector'}>
    <DetailsHeaderSelect options={sortConfig} onValueChange={onValueChange}/>
  </div>
}
