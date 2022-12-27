import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FilterOperatorEnum } from '../../../../../enum';
import { changeFilters, clearFilter } from '../../../../../store/redux/actions/filters';
import { useSelector } from '../../../../../store/redux/useSelector';
import { RadioFilterElementPropsInterface } from './radio-filter-element-props.interface';
import './radio-filter-element.scss';

export const RadioFilterElement = ({params: {options, filterElementName}}: RadioFilterElementPropsInterface) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const externalFilterChange = useRef<boolean>(false);
  const dispatch = useDispatch();
  const filtersData = useSelector(state => state.filtersData.filters);

  useEffect(() => {
    if (selectedValue === null || externalFilterChange.current) {
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
    externalFilterChange.current = false;
    const isChecked = event.target.checked;
    const value = event.target.value;
    const newValue = isChecked && selectedValue !== value ? value : '';
    setSelectedValue(newValue);
  };

  useEffect(() => {
    const foundFilterData = filtersData.find(singleFilterData => singleFilterData.field === filterElementName);
    if (!foundFilterData) {
      if (selectedValue === null) {
        return;
      }
      if (selectedValue.length) {
        externalFilterChange.current = true;
        setSelectedValue('');
      }
    } else {
      externalFilterChange.current = true;
      if (!selectedValue) {
        setSelectedValue(foundFilterData.values[0]);
      }
      const areValuesDifferent = foundFilterData.values[0] !== selectedValue;
      if (areValuesDifferent) {
        setSelectedValue(foundFilterData.values[0]);
      }
    }
  }, [filtersData]);

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
