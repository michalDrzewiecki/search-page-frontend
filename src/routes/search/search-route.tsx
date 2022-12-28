import { ProductList } from '../../components/product-list/product-list';
import { ProductRecommendedList } from '../../components/product-recommended-list/product-recommended-list';
import { SearchDetailsFooter } from '../../components/search-details-footer/search-details-footer';
import { SearchDetailsHeader } from '../../components/search-details-header/search-details-header';
import { SearchHeader } from '../../components/search-header/search-header';
import { SideFilters } from '../../components/side-filters/side-filters';
import './search-route.scss';
import { filterConfig } from '../../config/filters/filter-config';
import { SearchUrlParamsContainer } from '../../containers/search-url-params-container/search-url-params.container';
import { useSelector } from '../../store/redux/useSelector';

export const SearchRoute = () => {
  const language = useSelector(state => state.languageConfig.language);

  return (
    <SearchUrlParamsContainer>
      <div className={'searchRoute'}>
        <div/>
        <div>
          <SearchHeader/>
          <div className={'searchContainer'}>
            <div>
              <SideFilters filtersConfig={filterConfig(language)}/>
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
  );
};
