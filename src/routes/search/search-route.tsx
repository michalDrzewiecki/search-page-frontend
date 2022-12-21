import { ProductList } from '../../components/product-list/product-list';
import { ProductRecommendedList } from '../../components/product-recommended-list/product-recommended-list';
import { SearchDetailsHeader } from '../../components/search-details-header/search-details-header';
import { SearchHeader } from '../../components/search-header/search-header';
import { SideFilters } from '../../components/side-filters/side-filters';
import './search-route.scss';
import { filterConfig } from '../../config/filters/filter-config';

export const SearchRoute = () => {
  return (
    <div className={'searchRoute'}>
      <div/>
      <div>
        <SearchHeader/>
        <div className={'searchContainer'}>
          <div>
            <SideFilters filtersConfig={filterConfig}/>
          </div>
          <div/>
          <div className={'resultsContainer'}>
            <ProductRecommendedList/>
            <SearchDetailsHeader/>
            <ProductList/>
          </div>
        </div>
      </div>
      <div/>
    </div>
  )
}
