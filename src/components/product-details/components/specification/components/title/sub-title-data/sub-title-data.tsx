import { SubTitleDataPropsInterface } from './sub-title-data-props.interface';
import './sub-title-data.scss';

export const SubTitleData = ({producer: {displayName, value}, id}: SubTitleDataPropsInterface) => {
  return <div className={'subTitleDataContainer'}>
    <a>{`${displayName}: `}</a>
    <a className={'producerValue'}>{value}</a>
    <a className={'separator'}>{'|'}</a>
    <a>{'id: '}</a>
    <a>{id}</a>
  </div>
}
