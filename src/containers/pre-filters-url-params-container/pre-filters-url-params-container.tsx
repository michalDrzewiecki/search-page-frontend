import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { changeSelectedCategories } from '../../store/redux/actions/filters';
import { transformQueryParamsToFilterData } from '../../utils';
import { PreFiltersUrlParamsContainerPropsInterface } from './pre-filters-url-params-container-props.interface';

export const PreFiltersUrlParamsContainer = ({children}: PreFiltersUrlParamsContainerPropsInterface) => {
  const [searchParams] = useSearchParams();
  const [areQueryParamsParsed, setAreQueryParamsParsed] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const searchParamsObject: Record<string, string> = {};
    Array.from(searchParams.keys()).forEach(key => searchParamsObject[key] = searchParams.get(key) as string);
    const filters = transformQueryParamsToFilterData(searchParamsObject, {availableFilters: [], availableSortOptions: []});
    if (filters.selectedSubcategory || filters.selectedCategory) {
      dispatch(changeSelectedCategories({
        selectedCategory: filters.selectedCategory,
        selectedSubcategory: filters.selectedSubcategory
      }));
    }
    setAreQueryParamsParsed(true);
  }, []);

  return <>{areQueryParamsParsed ? children : null}</>;
};
