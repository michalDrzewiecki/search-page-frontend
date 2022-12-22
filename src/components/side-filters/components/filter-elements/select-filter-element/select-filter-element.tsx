import { SelectFilterElementPropsInterface } from './select-filter-element-props.interface';
import './select-filter-element.scss';

export const SelectFilterElement = ({params: {options}}: SelectFilterElementPropsInterface) => {
  return <div className={'selectElementContainer'}>
    <select>
      {
        options.map(option => <option key={option}>{option}</option>)
      }
    </select>
  </div>
}
