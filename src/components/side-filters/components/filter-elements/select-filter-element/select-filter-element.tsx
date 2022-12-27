import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FilterOperatorEnum } from '../../../../../enum';
import { changeFilters, clearFilter } from '../../../../../store/redux/actions/filters';
import { useSelector } from '../../../../../store/redux/useSelector';
import { SelectFilterElementPropsInterface } from './select-filter-element-props.interface';
import './select-filter-element.scss';

export const SelectFilterElement = ({params: {options, filterElementName}}: SelectFilterElementPropsInterface) => {
  const externalFilterChange = useRef<boolean>(false);
  const dispatch = useDispatch();
  const filtersData = useSelector(state => state.filtersData.filters);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  useEffect(() => {
    if (selectedValue === null || externalFilterChange.current) {
      return;
    }
    selectedValue ?
      dispatch(changeFilters({
        field: filterElementName,
        values: [selectedValue],
        operator: FilterOperatorEnum.eq
      })) :
      dispatch(clearFilter(filterElementName));
  }, [selectedValue]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    externalFilterChange.current = false;
    const value = event.target.value
    const specificOption = options.find(option => option.value === value);
    if (!specificOption) {
      return;
    }
    setSelectedValue(value);
  };

  useEffect(() => {
    const foundFilterData = filtersData.find(singleFilterData => singleFilterData.field === filterElementName);
    if (!foundFilterData) {
      const defaultValue = options.find(option => !option.value) || options[0];
      externalFilterChange.current = true;
      setSelectedValue(defaultValue.value);
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
  }, [filtersData])

  return <div className={'selectElementContainer'}>
    <select onChange={handleChange} value={selectedValue || ''}>
      {
        options.map(option => <option key={option.value} value={option.value}>{option.displayName}</option>)
      }
    </select>
  </div>
}
