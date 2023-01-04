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
  const availableFilters = useSelector(state => state.availableFiltersData);
  const dispatch = useDispatch();

  useEffect(() => {
    const searchParamsObject: Record<string, string> = {};
    Array.from(searchParams.keys()).forEach(key => searchParamsObject[key] = searchParams.get(key) as string);
    const filters = transformQueryParamsToFilterData(searchParamsObject, availableFilters);
    dispatch(changeAllFiltersData(filters));
    setAreQueryParamsParsed(true);
  }, [availableFilters]);

  useEffect(() => {
    const queryParams = transformPaginationDataToVisibleQuery(transformFilterDataToQueryParams(filtersData));
    if (queryParams !== searchParams.toString()) {
      setSearchParams(queryParams);
    }
  }, [filtersData]);

  return <>{areQueryParamsParsed ? children : null}</>;
};
