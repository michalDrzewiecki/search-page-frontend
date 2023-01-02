import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FilteringKeyWordsEnum } from '../../enum';
import { FilterService } from '../../services/filter.service';
import { changeAvailableFilters } from '../../store/redux/actions/available-filters';
import { useSelector } from '../../store/redux/useSelector';
import { getQueryParam } from '../../utils';
import { FiltersContainerPropsInterface } from './filters-container-props.interface';

export const FiltersContainer = ({children}: FiltersContainerPropsInterface) => {
  const [areAvailableFiltersFetched, setAreAvailableFiltersFetched] = useState<boolean>(false);
  const language = useSelector(state => state.languageConfig.language);
  const filtersData = useSelector(state => state.filtersData);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchFilters = async () => {
      const {selectedCategory, selectedSubcategory} = filtersData;
      const categoryQueryParam = getQueryParam(FilteringKeyWordsEnum.category, selectedCategory);
      const subcategoryQueryParam = getQueryParam(FilteringKeyWordsEnum.subcategory, selectedSubcategory);
      const fetchedFilters = await new FilterService()
        .fetchFilters(`${getQueryParam(FilteringKeyWordsEnum.market, language)}${categoryQueryParam}${subcategoryQueryParam}`);
      dispatch(changeAvailableFilters({
        availableFilters: fetchedFilters.filters,
        availableSortOptions: fetchedFilters.sort
      }))
      setAreAvailableFiltersFetched(true);
    };
    fetchFilters();
  }, [language, filtersData.selectedCategory, filtersData.selectedSubcategory]);

  return <>{areAvailableFiltersFetched ? children : null}</>;
};
