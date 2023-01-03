import React from 'react';
import { FilterElementType } from '../../../../../config/filters/types';
import { FilterElementTypeEnum } from '../../../../../enum/filter-element-type.enum';
import { CheckboxFilterElement } from '../checkbox-filter-element/checkbox-filter-element';
import { RadioFilterElement } from '../radio-filter-element/radio-filter-element';
import { RangeFilterElement } from '../range-filter-element/range-filter-element';
import { SelectFilterElement } from '../select-filter-element/select-filter-element';
import { Details } from './components/details/details';
import { FilterElementPropsInterface } from './filter-element-props.interface';
import './filter-element.scss';

const filterElements = {
  [FilterElementTypeEnum.select]: SelectFilterElement,
  [FilterElementTypeEnum.radio]: RadioFilterElement,
  [FilterElementTypeEnum.checkbox]: CheckboxFilterElement,
  [FilterElementTypeEnum.range]: RangeFilterElement
}

export const FilterElement = ({filterConfig}: FilterElementPropsInterface) => {
  const {type, details, title} = filterConfig;
  const CurrentComponent = filterElements[type] as React.FunctionComponent<{params: FilterElementType}>;

  return <div className={'filterElement'}>
    <div className={'filterElementName'}>
      <h3>{title}</h3>
      {details ? <Details details={details} title={title}/> : null}
    </div>
    <CurrentComponent params={filterConfig}/>
  </div>
}
