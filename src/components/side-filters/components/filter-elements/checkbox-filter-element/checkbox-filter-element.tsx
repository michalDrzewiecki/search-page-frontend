import { CheckboxFilterElementPropsInterface } from './checkbox-filter-element-props-interface';
import './checkbox-filter-element.scss';

export const CheckboxFilterElement = ({params: {options}}: CheckboxFilterElementPropsInterface) => {
  return <div>
    {
      options.map(option => <div className={'checkboxElement'}>
        <input type={'checkbox'} id={option} value={option}/>
        <label htmlFor={option}>{option}</label>
      </div>)
    }
  </div>
}
