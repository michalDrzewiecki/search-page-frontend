import './route-title.scss';
import { RouteTitlePropsInterface } from './route-title-props.interface';

export const RouteTitle = ({category}: RouteTitlePropsInterface) => {
  return <div className={'routeTitle'}>
    {category}
  </div>
}
