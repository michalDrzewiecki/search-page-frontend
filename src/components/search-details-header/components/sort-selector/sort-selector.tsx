import './sort-selector.scss';
import { useDispatch } from 'react-redux';
import { changeSort, clearSort } from '../../../../store/redux/actions/filters';
import { SortSelect } from './components/sort-select/sort-select';
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

  return <div className={'sortSelectorContainer'}>
    <SortSelect options={sortConfig} onValueChange={onValueChange}/>
  </div>
}
