import { DetailsHeaderSelectPropsInterface } from './details-header-select-props.interface';

export const DetailsHeaderSelect = ({options}: DetailsHeaderSelectPropsInterface) => {
  return <div>
    <select>
      {
        options.map(option => <option>{option}</option>)
      }
    </select>
  </div>
}
