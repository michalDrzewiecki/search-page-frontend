import { FilterElementTypeEnum } from '../../../../../enum/filter-element-type.enum';
import { CheckboxFilterElement } from '../checkbox-filter-element/checkbox-filter-element';
import { RadioFilterElement } from '../radio-filter-element/radio-filter-element';
import { RangeFilterElement } from '../range-filter-element/range-filter-element';
import { SelectFilterElement } from '../select-filter-element/select-filter-element';
import { Details } from './components/details/details';
import { FilterElementPropsInterface } from './filter-element-props.interface';

const filterElements = {
  [FilterElementTypeEnum.select]: SelectFilterElement,
  [FilterElementTypeEnum.radio]: RadioFilterElement,
  [FilterElementTypeEnum.checkbox]: CheckboxFilterElement,
  [FilterElementTypeEnum.range]: RangeFilterElement
}

export const FilterElement = ({filterConfig}: FilterElementPropsInterface) => {
  const {type, details, title} = filterConfig;
  const CurrentComponent = filterElements[type] as React.;

  return <div className={'filterElement'}>
    <h1>{title}</h1>
    {details ? <Details details={details}/> : null}
    <CurrentComponent params={filterConfig}/>
  </div>
}
