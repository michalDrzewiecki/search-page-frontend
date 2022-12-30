import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { changeAllFiltersData } from '../../store/redux/actions/filters';
import { useSelector } from '../../store/redux/useSelector';
import {
  transformFilterDataToQueryParams,
  transformPaginationDataToVisibleQuery,
  transformQueryParamsToFilterData
} from '../../utils';
import { SearchUrlParamsContainerPropsInterface } from './search-url-params-container-props.interface';

export const SearchUrlParamsContainer = ({children}: SearchUrlParamsContainerPropsInterface) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [areQueryParamsParsed, setAreQueryParamsParsed] = useState<boolean>(false);
  const filtersData = useSelector(state => state.filtersData);
  const categoryData = useSelector(state => state.categoryData);
  const dispatch = useDispatch();

  useEffect(() => {
    const searchParamsObject: Record<string, string> = {};
    Array.from(searchParams.keys()).forEach(key => searchParamsObject[key] = searchParams.get(key) as string);
    const filters = transformQueryParamsToFilterData(searchParamsObject);
    if (JSON.stringify(filters) !== JSON.stringify(filtersData)) {
      dispatch(changeAllFiltersData(filters));
    }
    setAreQueryParamsParsed(true);
  }, [])

  useEffect(() => {
    const queryParams = transformPaginationDataToVisibleQuery(transformFilterDataToQueryParams(filtersData, categoryData));
    if (queryParams !== searchParams.toString()) {
      setSearchParams(queryParams);
    }
  }, [filtersData, categoryData]);

  return <>{areQueryParamsParsed ? children : null}</>;
};
