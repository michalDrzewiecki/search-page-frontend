import { RadioFilterElementPropsInterface } from './radio-filter-element-props.interface';
import './radio-filter-element.scss';

export const RadioFilterElement = ({params: {options}}: RadioFilterElementPropsInterface) => {
  return <div>
    {
      options.map(option => <div className={'radioElement'}>
        <input type={'radio'} id={option} value={option}/>
        <label htmlFor={option}>{option}</label>
      </div>)
    }
  </div>
}
