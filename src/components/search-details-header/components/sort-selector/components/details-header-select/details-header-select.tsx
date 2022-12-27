import React, { useEffect, useState } from 'react';
import { useSelector } from '../../../../../../store/redux/useSelector';
import { DetailsHeaderSelectPropsInterface } from './details-header-select-props.interface';

export const DetailsHeaderSelect = ({options, onValueChange}: DetailsHeaderSelectPropsInterface) => {
  const [selectedSortValue, setSelectedSortValue] = useState<string>('');
  const sortData = useSelector(state => state.filtersData.sort);

  useEffect(() => {
    const {field, value} = sortData;
    if (!field) {
      return;
    }
    const sortOption = options.find(option => option.sortField === field && option.sortValue == value);
    if (!sortOption) {
      return;
    }
    setSelectedSortValue(sortOption.name);
  }, [sortData]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = event.target.value;
    setSelectedSortValue(value);
    onValueChange(value)
  }

  return <div>
    <select onChange={handleChange} value={selectedSortValue}>
      {
        options.map(option => <option key={option.name} value={option.name}>{option.name}</option>)
      }
    </select>
  </div>
}
