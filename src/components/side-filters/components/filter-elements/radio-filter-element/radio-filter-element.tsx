import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FilterOperatorEnum } from '../../../../../enum';
import { changeFilters, clearFilter } from '../../../../../store/redux/actions/filters';
import { RadioFilterElementPropsInterface } from './radio-filter-element-props.interface';
import './radio-filter-element.scss';

export const RadioFilterElement = ({params: {options, filterElementName}}: RadioFilterElementPropsInterface) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedValue === null) {
      return;
    }
    selectedValue ?
      dispatch(changeFilters({
        field: filterElementName,
        operator: FilterOperatorEnum.eq,
        values: [selectedValue]
      })) :
      dispatch(clearFilter(filterElementName));
  }, [selectedValue]);

  const handleRadioClick = (event: any): void => {
    const isChecked = event.target.checked;
    const value = event.target.value;
    const newValue = isChecked && selectedValue !== value ? value : '';
    setSelectedValue(newValue);
  };

  return <div>
    {
      options.map(option => <div key={option.value} className={'radioElement'}>
        <input
          type={'radio'}
          id={option.value}
          value={option.value}
          checked={selectedValue === option.value}
          onChange={() => null}
          onClick={handleRadioClick}
        />
        <label htmlFor={option.value}>{option.displayName}</label>
      </div>)
    }
  </div>
}
