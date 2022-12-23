import React from 'react';
import { useDispatch } from 'react-redux';
import { FilterOperatorEnum } from '../../../../../enum';
import { changeFilters } from '../../../../../store/redux/actions/filters';
import { SelectFilterElementPropsInterface } from './select-filter-element-props.interface';
import './select-filter-element.scss';

export const SelectFilterElement = ({params: {options, filterElementName}}: SelectFilterElementPropsInterface) => {
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = event.target.value
    const specificOption = options.find(option => option.displayName === value);
    if (!specificOption) {
      return;
    }
    dispatch(changeFilters({
      field: filterElementName,
      values: [specificOption.value],
      operator: FilterOperatorEnum.eq
    }));
  };

  return <div className={'selectElementContainer'}>
    <select onChange={handleChange}>
      {
        options.map(option => <option key={option.value}>{option.displayName}</option>)
      }
    </select>
  </div>
}
