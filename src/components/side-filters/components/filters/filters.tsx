import { useDispatch } from 'react-redux';
import { LanguageEnum, TranslationComponentNameEnum } from '../../../../enum';
import { FiltersTranslationData } from '../../../../interfaces';
import { clearAllFilters } from '../../../../store/redux/actions/filters';
import { useSelector } from '../../../../store/redux/useSelector';
import { getTranslation } from '../../../../utils';
import { FilterElement } from '../filter-elements/filter-element/filter-element';
import { ShowAllFilters } from '../show-all-filters/show-all-filters';
import { FiltersPropsInterface } from './filters-props.interface';
import './filters.scss';

export const Filters = ({filtersConfig}: FiltersPropsInterface) => {
  const language: LanguageEnum = useSelector(state => state.languageConfig.language);
  const translations = getTranslation(language, TranslationComponentNameEnum.filters) as FiltersTranslationData;

  const filters = useSelector(state => state.filtersData.filters);

  const dispatch = useDispatch();

  const onClearFiltersClick = (): void => {
    if (filters.length) {
      dispatch(clearAllFilters());
    }
  }

  return <div className={'filters'}>
    <div className={'filtersHeader'}>
      <div className={'filtersTitle'}>
        <h2>{translations.filtersTitle}</h2>
        <p onClick={onClearFiltersClick}>{translations.clearAllFiltersText}</p>
      </div>
      <ShowAllFilters/>
    </div>
    {filtersConfig.map((filterConfig, index) => <div key={index} className={'filterElementContainer'}>
      <FilterElement filterConfig={filterConfig}/>
    </div>)}
  </div>
}
