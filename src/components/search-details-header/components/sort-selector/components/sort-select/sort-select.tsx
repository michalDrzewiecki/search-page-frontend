import React, { useEffect, useRef, useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { useSelector } from '../../../../../../store/redux/useSelector';
import { SortSelectPropsInterface } from './sort-select-props.interface';
import './sort-select.scss';

export const SortSelect = ({options, onValueChange}: SortSelectPropsInterface) => {
  const [selectedSortValue, setSelectedSortValue] = useState<string>('');
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null >(null);
  const sortData = useSelector(state => state.filtersData.sort);

  useEffect(() => {
    if (!sortData.field) {
      const initialSelectValue = options.find(option => !option.sortField);
      if (initialSelectValue) {
        setSelectedSortValue(initialSelectValue.name);
      }
    }
  }, []);

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

  const onSortOptionClick = (optionName: string): void => {
    setSelectedSortValue(optionName);
    onValueChange(optionName)
  }

  return <div
    className={'sortSelectContainer'}
    ref={selectRef}
    onClick={() => setIsSelectOpen(!isSelectOpen)}
  >
    <div
      className='sortSelect'
    >
      <div className={isSelectOpen ? 'sortSelectedOptionActive' : 'sortSelectedOption'}>
        <div className={'sortSelectedText'}>
          {selectedSortValue}
        </div>
        <div className={'sortSelectIcon'}>
          {isSelectOpen ? <AiFillCaretUp/> : <AiFillCaretDown/>}
        </div>
      </div>
      {
        isSelectOpen &&
          options.map(option =>
            <div
              className={selectedSortValue === option.name ? 'sortSelectOptionSelected' : 'sortSelectOption'}
              onClick={() => onSortOptionClick(option.name)}
            >
              {option.name}
            </div>)
      }
    </div>
  </div>
}
