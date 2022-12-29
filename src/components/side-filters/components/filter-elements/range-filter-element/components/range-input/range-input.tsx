import React from 'react';
import './range-input.scss';
import { RangeInputPropsInterface } from './range-input-props.interface';

export const RangeInput = ({value, onFocus, onChange, unit, isInvalidInput}: RangeInputPropsInterface) => {
  return <div className={isInvalidInput ? 'singleRangeContainerWithError' : 'singleRangeContainer'}>
    <input
      type={'text'}
      value={value}
      onFocus={onFocus}
      onChange={onChange}
    />
    <div className={'unitContainer'}>
      {unit}
    </div>
  </div>
}
