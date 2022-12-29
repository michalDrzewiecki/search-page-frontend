import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FilterOperatorEnum, TranslationComponentNameEnum } from '../../../../../enum';
import { FiltersTranslationData } from '../../../../../interfaces';
import { changeFilters, clearFilter } from '../../../../../store/redux/actions/filters';
import { useSelector } from '../../../../../store/redux/useSelector';
import { getTranslation } from '../../../../../utils';
import { CheckboxFilterElementPropsInterface } from './checkbox-filter-element-props-interface';
import './checkbox-filter-element.scss';

export const CheckboxFilterElement = ({params: {options, filterElementName, selectAllOption}}: CheckboxFilterElementPropsInterface) => {
  const [selectedValues, setSelectedValues] = useState<string[] | null>(null);
  const externalFilterChange = useRef<boolean>(false);
  const dispatch = useDispatch();
  const filtersData = useSelector(state => state.filtersData.filters);
  const language = useSelector(state => state.languageConfig.language);
  const translations = getTranslation(language, TranslationComponentNameEnum.filters) as FiltersTranslationData;

  useEffect(() => {
    if (!selectedValues || externalFilterChange.current) {
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
    externalFilterChange.current = false;
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
        externalFilterChange.current = true;
        setSelectedValues([]);
      }
    } else {
      externalFilterChange.current = true;
      if (!selectedValues) {
        setSelectedValues(foundFilterData.values);
      }
      const areValuesDifferent = foundFilterData.values.some(value => !selectedValues?.includes(value));
      if (areValuesDifferent) {
        setSelectedValues(foundFilterData.values);
      }
    }
  }, [filtersData]);

  const onSelectAllClick = (): void => {
    externalFilterChange.current = false;
    setSelectedValues(options.map(option => option.value));
  }

  return <div className={'checkBoxContainer'}>
    {
      selectAllOption ?
        <p
          className={'selectAll'}
          onClick={onSelectAllClick}
        >
          {translations.selectAllFiltersText}
        </p> :
        null
    }
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
