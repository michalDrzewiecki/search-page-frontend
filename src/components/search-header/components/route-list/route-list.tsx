import './route-list.scss';
import { RouteElement } from './components/route-element/route-element';
import { RouteListPropsInterface } from './route-list-props.interface';

export const RouteList = ({routes}: RouteListPropsInterface) => {
  return <div className={'routeList'}>
    {routes.map((route, index) => <div key={route.name} className={'routeElementContainer'}>
      <RouteElement route={route}/>
      &nbsp;{index !== routes.length - 1 ? '>' : ''}&nbsp;
    </div>)}
  </div>
}
