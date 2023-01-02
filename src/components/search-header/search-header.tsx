import { useEffect, useState } from 'react';
import { TranslationComponentNameEnum } from '../../enum';
import { SearchHeaderData } from '../../interfaces';
import { useSelector } from '../../store/redux/useSelector';
import { getCategoryResourceName, getTranslation } from '../../utils';
import { ProductCounter } from './components/product-counter/product-counter';
import { RouteList } from './components/route-list/route-list';
import { RouteDataInterface } from './components/route-list/route-list-props.interface';
import { RouteTitle } from './components/route-title/route-title';
import './search-header.scss';

export const SearchHeader = () => {
  const productAmount = useSelector(state => state.productData.productAmount);
  const categoryData = useSelector(state => state.categoryData);
  const filterData = useSelector(state => state.filtersData);
  const language = useSelector(state => state.languageConfig.language);
  const translations = getTranslation(language, TranslationComponentNameEnum.searchHeader) as SearchHeaderData;

  const [routeTitle, setRouteTitle] = useState<string>('');
  const [routes, setRoutes] = useState<RouteDataInterface[]>([]);

  useEffect(() => {
    let routeTitle = translations.productsText;
    const newRoutes: RouteDataInterface[] = [];
    const {selectedCategory, selectedSubcategory} = filterData;
    if (selectedCategory) {
      const displayName = getCategoryResourceName(categoryData.categories, selectedCategory);
      routeTitle = displayName
      newRoutes.push({
        name: displayName
      });
    }
    if (selectedSubcategory) {
      const displayName = getCategoryResourceName(categoryData.categories, selectedSubcategory);
      routeTitle = displayName;
      newRoutes.push({
        name: displayName
      })
    }
    if (filterData.search) {
      routeTitle= `"${filterData.search}"`;
      newRoutes.push({
        name: `"${filterData.search}"`
      })
    }
    setRouteTitle(routeTitle);
    setRoutes(newRoutes);
  }, [filterData.selectedCategory, filterData.selectedSubcategory, filterData.search]);

  return <div className={'searchHeader'}>
    {routes.length ? <RouteList routes={routes}/> : null}
    <div className={'routeTitleContainer'}>
      <RouteTitle category={routeTitle}/>
      {productAmount ? <ProductCounter productAmount={productAmount}/> : null}
    </div>
  </div>
}
