import { RouteElementPropsInterface } from './route-element-props.interface';
import './route-element.scss';

export const RouteElement = ({route: {name, link}}: RouteElementPropsInterface) => {
  return <div className={'routeElement'}>
    {name}
  </div>
}
