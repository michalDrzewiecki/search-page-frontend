import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FilterOperatorEnum } from '../../../../../enum';
import { changeFilters, clearFilter } from '../../../../../store/redux/actions/filters';
import { CheckboxFilterElementPropsInterface } from './checkbox-filter-element-props-interface';
import './checkbox-filter-element.scss';

export const CheckboxFilterElement = ({params: {options, filterElementName}}: CheckboxFilterElementPropsInterface) => {
  const [selectedValues, setSelectedValues] = useState<string[] | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!selectedValues) {
      return;
    }
    selectedValues.length ?
      dispatch(changeFilters({
        field: filterElementName,
        operator: FilterOperatorEnum.eq,
        values: selectedValues as string[]
      })) :
      dispatch(clearFilter(filterElementName));
  }, [selectedValues]);

  const handleCheckBoxValueChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const isChecked = event.target.checked;
    const value = event.target.value;
    if (isChecked) {
      setSelectedValues(selectedValues ? [...selectedValues, value] : [value]);
    } else {
      setSelectedValues(selectedValues ? selectedValues.filter(selectedValue => selectedValue !== value) : []);
    }
  }

  return <div>
    {
      options.map(option => <div key={option.value} className={'checkboxElement'}>
        <input type={'checkbox'} id={option.value} value={option.value} onChange={handleCheckBoxValueChanged}/>
        <label htmlFor={option.value}>{option.displayName}</label>
      </div>)
    }
  </div>
}
