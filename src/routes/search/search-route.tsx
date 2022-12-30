import { ProductList } from '../../components/product-list/product-list';
import { ProductRecommendedList } from '../../components/product-recommended-list/product-recommended-list';
import { SearchDetailsFooter } from '../../components/search-details-footer/search-details-footer';
import { SearchDetailsHeader } from '../../components/search-details-header/search-details-header';
import { SearchHeader } from '../../components/search-header/search-header';
import { SideFilters } from '../../components/side-filters/side-filters';
import { CategoriesContainer } from '../../containers/categories-container/categories-container';
import { FiltersContainer } from '../../containers/filters-container/filters-container';
import { SearchUrlParamsContainer } from '../../containers/search-url-params-container/search-url-params.container';
import './search-route.scss';

export const SearchRoute = () => {
  return (
    <CategoriesContainer>
      <FiltersContainer>
        <SearchUrlParamsContainer>
          <div className={'searchRoute'}>
            <div/>
            <div>
              <SearchHeader/>
              <div className={'searchContainer'}>
                <div>
                  <SideFilters/>
                </div>
                <div/>
                <div className={'resultsContainer'}>
                  <ProductRecommendedList/>
                  <SearchDetailsHeader/>
                  <ProductList/>
                  <SearchDetailsFooter/>
                </div>
              </div>
            </div>
            <div/>
          </div>
        </SearchUrlParamsContainer>
      </FiltersContainer>
    </CategoriesContainer>
  );
};
