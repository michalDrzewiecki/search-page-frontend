import './detail.scss';
import { DetailPropsInterface } from './detail-props.interface';

export const Detail = ({detail: {displayName, value}}: DetailPropsInterface) => {
  return <div className={'detailContainer'}>
    <a className={'displayNameText'}>{`${displayName}: `}</a>
    <a className={'valueText'}>{value}</a>
  </div>
}
