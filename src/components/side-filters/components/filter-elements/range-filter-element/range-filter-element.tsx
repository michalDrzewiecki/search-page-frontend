import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FilterOperatorEnum } from '../../../../../enum';
import { changeFilters, clearFilter } from '../../../../../store/redux/actions/filters';
import { RangeFilterElementPropsInterface } from './range-filter-element-props.interface';
import './range-filter-element.scss';

const REQUEST_SEND_DELAY_MS = 600;

export const RangeFilterElement = ({
   params: {
     firstText,
     firstUnit,
     secondText,
     secondUnit,
     filterElementName
 }}: RangeFilterElementPropsInterface) => {
  const [lowerValue, setLowerValue] = useState<string | null>(null);
  const [lowerValueTimer, setLowerValueTimer] = useState<NodeJS.Timeout | null>(null);
  const [upperValue, setUpperValue] = useState<string | null>(null);
  const [upperValueTimer, setUpperValueTimer] = useState<NodeJS.Timeout | null>(null);
  const dispatch = useDispatch();

  const updateFiltersData = (lowerValue: string | null, upperValue: string | null): void => {
    if (lowerValue && upperValue) {
      dispatch(changeFilters({
        field: filterElementName,
        operator: FilterOperatorEnum.between,
        values: [lowerValue, upperValue]
      }));
    } else if (lowerValue && !upperValue) {
      dispatch(changeFilters({
        field: filterElementName,
        operator: FilterOperatorEnum.gt,
        values: [lowerValue]
      }));
    } else if (upperValue && !lowerValue) {
      dispatch(changeFilters({
        field: filterElementName,
        operator: FilterOperatorEnum.lt,
        values: [upperValue]
      }));
    } else if (upperValue === '' && lowerValue === '') {
      dispatch(clearFilter(filterElementName));
    }
  };

  const onLowerValueChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setLowerValue(value);
    if (lowerValueTimer) {
      clearTimeout(lowerValueTimer);
    }
    const newLowerValueTimer = setTimeout(() => {
      updateFiltersData(value, upperValue);
    }, REQUEST_SEND_DELAY_MS)
    setLowerValueTimer(newLowerValueTimer);
  };

  const onLowerRangeFocus = (event: React.FocusEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    if (value === firstText) {
      setLowerValue('');
    }
  }

  const onUpperValueChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setUpperValue(value);
    if (upperValueTimer) {
      clearTimeout(upperValueTimer);
    }
    const newUpperValueTimer = setTimeout(() => {
      updateFiltersData(lowerValue, value);
    }, REQUEST_SEND_DELAY_MS)
    setUpperValueTimer(newUpperValueTimer);
  };

  const onUpperRangeFocus = (event: React.FocusEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    if (value === secondText) {
      setUpperValue('');
    }
  }

  return <div className={'rangeFilterContainer'}>
    <div className={'singleRangeContainer'}>
      <input
        type={'text'}
        value={lowerValue === null ? firstText : lowerValue}
        onFocus={onLowerRangeFocus}
        onChange={onLowerValueChange}
      />
    </div>
    <div className={'lineContainer'}>
      <hr className={'line'}/>
    </div>
    <div className={'singleRangeContainer'}>
      <input
        type={'text'}
        value={upperValue === null ? secondText : upperValue}
        onFocus={onUpperRangeFocus}
        onChange={onUpperValueChange}
      />
    </div>
  </div>
}
