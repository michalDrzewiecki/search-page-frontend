import './search-header.scss';
import { useSelector } from '../../store/redux/useSelector';
import { ProductCounter } from './components/product-counter/product-counter';
import { RouteList } from './components/route-list/route-list';
import { RouteTitle } from './components/route-title/route-title';

export const SearchHeader = () => {
  const productAmount = useSelector(state => state.productData.productAmount);

  return <div className={'searchHeader'}>
    {/*<RouteList routes={[{name: 'searchpage', link: ''}, {name: 'laptopy', link: ''}, {name: 'ultrabooki/notebooki', link: ''}]}/>*/}
    <div className={'routeTitleContainer'}>
      <RouteTitle category={'Laptopy/Notebooki/Ultrabooki'}/>
      {productAmount ? <ProductCounter productAmount={productAmount}/> : null}
    </div>
  </div>
}
