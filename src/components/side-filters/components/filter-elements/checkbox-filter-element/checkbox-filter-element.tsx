import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FilterOperatorEnum } from '../../../../../enum';
import { changeFilters, clearFilter } from '../../../../../store/redux/actions/filters';
import { useSelector } from '../../../../../store/redux/useSelector';
import { CheckboxFilterElementPropsInterface } from './checkbox-filter-element-props-interface';
import './checkbox-filter-element.scss';

export const CheckboxFilterElement = ({params: {options, filterElementName}}: CheckboxFilterElementPropsInterface) => {
  const [selectedValues, setSelectedValues] = useState<string[] | null>(null);
  const [externalFilterChange, setExternalFilterChange] = useState<boolean>(false);
  const dispatch = useDispatch();
  const filtersData = useSelector(state => state.filtersData.filters);

  useEffect(() => {
    if (!selectedValues || externalFilterChange) {
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
    setExternalFilterChange(false);
    const isChecked = event.target.checked;
    const value = event.target.value;
    if (isChecked) {
      setSelectedValues(selectedValues ? [...selectedValues, value] : [value]);
    } else {
      setSelectedValues(selectedValues ? selectedValues.filter(selectedValue => selectedValue !== value) : []);
    }
  }

  useEffect(() => {
    const foundFilterData = filtersData.find(singleFilterData => singleFilterData.field === filterElementName);
    if (!foundFilterData) {
      if (selectedValues === null) {
        return;
      }
      if (selectedValues.length) {
        setExternalFilterChange(true);
        setSelectedValues([]);
      }
    } else {
      setExternalFilterChange(true);
      if (!selectedValues) {
        setSelectedValues(foundFilterData.values);
      }
      const areValuesDifferent = foundFilterData.values.some(value => !selectedValues?.includes(value));
      if (areValuesDifferent) {
        setSelectedValues(foundFilterData.values);
      }
    }

  }, [filtersData]);

  return <div>
    {
      options.map(option => <div key={option.value} className={'checkboxElement'}>
        <input
          type={'checkbox'}
          id={option.value}
          value={option.value}
          onChange={handleCheckBoxValueChanged}
          checked={selectedValues?.includes(option.value)}
        />
        <label htmlFor={option.value}>{option.displayName}</label>
      </div>)
    }
  </div>
}
