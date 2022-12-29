import React, { useEffect, useRef, useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
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
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null >(null);

  useEffect(() => {
    if (externalFilterChange.current) {
      return;
    }
    if (selectedValue === null) {
      const defaultValue = options.find(option => !option.value) || options[0];
      setSelectedValue(defaultValue?.value || null);
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

  const handleClick = (value: string): void => {
    externalFilterChange.current = false;
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

  useEffect(() => {
    const handler = (e: any): void => {
      if (
        isSelectOpen &&
        selectRef.current &&
        !selectRef.current.contains(e.target)
      ) {
        setIsSelectOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  });

  const getDisplayName = (value: string | null): string => {
    return options?.find(option => option.value === value)?.displayName ?? '';
  }

  return <div
    className={'selectContainer'}
    ref={selectRef}
    onClick={() => setIsSelectOpen(!isSelectOpen)}
  >
    <div
      className='select'
    >
      <div className={isSelectOpen ? 'selectedOptionActive' : 'selectedOption'}>
        <div className={'selectedText'}>
          {getDisplayName(selectedValue)}
        </div>
        <div className={'selectIcon'}>
          {isSelectOpen ? <AiFillCaretUp/> : <AiFillCaretDown/>}
        </div>
      </div>
      {
        isSelectOpen &&
        options.map(option =>
          <div
            className={selectedValue === option.value ? 'selectOptionSelected' : 'selectOption'}
            onClick={() => handleClick(option.value)}
          >
            {option.displayName}
          </div>)
      }
    </div>
  </div>
}
