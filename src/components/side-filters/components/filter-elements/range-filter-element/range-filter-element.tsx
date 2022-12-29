import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FilterOperatorEnum } from '../../../../../enum';
import { changeFilters, clearFilter } from '../../../../../store/redux/actions/filters';
import { useSelector } from '../../../../../store/redux/useSelector';
import { RangeInput } from './components/range-input/range-input';
import { RangeFilterElementPropsInterface } from './range-filter-element-props.interface';
import './range-filter-element.scss';

const REQUEST_SEND_DELAY_MS = 600;

export const RangeFilterElement = ({
   params: {
     firstText,
     firstUnit,
     secondText,
     secondUnit,
     filterElementName,
     validation
 }}: RangeFilterElementPropsInterface) => {
  const [lowerValue, setLowerValue] = useState<string | null>(null);
  const [lowerValueTimer, setLowerValueTimer] = useState<NodeJS.Timeout | null>(null);
  const [upperValue, setUpperValue] = useState<string | null>(null);
  const [upperValueTimer, setUpperValueTimer] = useState<NodeJS.Timeout | null>(null);
  const [invalidInput, setInvalidInput] = useState<boolean>(false);
  const dispatch = useDispatch();
  const filtersData = useSelector(state => state.filtersData.filters);

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
    if (value && !validation(value)) {
      return;
    }
    setLowerValue(value);
    if (lowerValueTimer) {
      clearTimeout(lowerValueTimer);
    }
    if (upperValue && +upperValue < +value) {
      return;
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
    if (value && !validation(value)) {
      return;
    }
    setUpperValue(value);
    if (lowerValue && +lowerValue > +value) {
      return;
    }
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

  useEffect(() => {
    const foundFilterData = filtersData.find(singleFilterData => singleFilterData.field === filterElementName);
    if (!foundFilterData) {
      setUpperValue(null);
      setLowerValue(null);
    } else {
      const {operator, values} = foundFilterData;
      switch (operator) {
        case FilterOperatorEnum.gt:
          setLowerValue(values[0]);
          break;
        case FilterOperatorEnum.lt:
          setUpperValue(values[0]);
          break;
        case FilterOperatorEnum.between:
          setLowerValue(values[0]);
          setUpperValue(values[1]);
          break;
        default:
          break;
      }
    }
  }, [filtersData]);

  useEffect(() => {
    if (lowerValue && upperValue && +lowerValue > +upperValue) {
      setInvalidInput(true);
      return;
    }
    setInvalidInput(false);
  }, [lowerValue, upperValue])

  return <div className={'rangeFilterContainer'}>
    <RangeInput
      value={lowerValue === null ? firstText : lowerValue}
      unit={firstUnit}
      isInvalidInput={invalidInput}
      onFocus={onLowerRangeFocus}
      onChange={onLowerValueChange}
    />
    <div className={'lineContainer'}>
      <hr className={'line'}/>
    </div>
    <RangeInput
      value={upperValue === null ? secondText : upperValue}
      unit={secondUnit}
      isInvalidInput={invalidInput}
      onFocus={onUpperRangeFocus}
      onChange={onUpperValueChange}
    />
  </div>
}
