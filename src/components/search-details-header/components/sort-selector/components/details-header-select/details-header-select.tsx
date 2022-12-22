import React from 'react';
import { DetailsHeaderSelectPropsInterface } from './details-header-select-props.interface';

export const DetailsHeaderSelect = ({options, onValueChange}: DetailsHeaderSelectPropsInterface) => {

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = event.target.value;
    onValueChange(value)
  }

  return <div>
    <select onChange={handleChange}>
      {
        options.map(option => <option key={option}>{option}</option>)
      }
    </select>
  </div>
}
