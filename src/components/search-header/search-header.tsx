import { useEffect, useState } from 'react';
import { TranslationComponentNameEnum } from '../../enum';
import { SearchHeaderData } from '../../interfaces';
import { useSelector } from '../../store/redux/useSelector';
import { getTranslation } from '../../utils';
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
    if (categoryData.selectedCategory.displayName) {
      routeTitle = categoryData.selectedCategory.displayName;
      newRoutes.push({
        name: categoryData.selectedCategory.displayName
      });
    }
    if (categoryData.selectedSubcategory.displayName) {
      routeTitle = categoryData.selectedSubcategory.displayName;
      newRoutes.push({
        name: categoryData.selectedSubcategory.displayName
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
  }, [categoryData.selectedCategory.name, categoryData.selectedSubcategory.name, filterData.search]);

  return <div className={'searchHeader'}>
    {routes.length ? <RouteList routes={routes}/> : null}
    <div className={'routeTitleContainer'}>
      <RouteTitle category={routeTitle}/>
      {productAmount ? <ProductCounter productAmount={productAmount}/> : null}
    </div>
  </div>
}
