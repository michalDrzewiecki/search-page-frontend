import './search-header.scss';
import { ProductCounter } from './components/product-counter/product-counter';
import { RouteList } from './components/route-list/route-list';
import { RouteTitle } from './components/route-title/route-title';

export const SearchHeader = () => {
  return <div className={'searchHeader'}>
    <RouteList/>
    <div className={'routeTitleContainer'}>
      <RouteTitle/>
      <ProductCounter/>
    </div>
  </div>
}
