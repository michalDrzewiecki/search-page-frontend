import { LanguageEnum, TranslationComponentNameEnum } from '../../../../enum';
import { FiltersTranslationData } from '../../../../interfaces';
import { useSelector } from '../../../../store/redux/useSelector';
import { getTranslation } from '../../../../utils';
import { FilterElement } from '../filter-elements/filter-element/filter-element';
import { ShowAllFilters } from '../show-all-filters/show-all-filters';
import { FiltersPropsInterface } from './filters-props.interface';
import './filters.scss';

export const Filters = ({filtersConfig}: FiltersPropsInterface) => {
  const language: LanguageEnum = useSelector(state => state.languageConfig.language);
  const translations = getTranslation(language, TranslationComponentNameEnum.filters) as FiltersTranslationData;

  return <div className={'filters'}>
    <div className={'filtersHeader'}>
      <div className={'filtersTitle'}>
        <h2>{translations.filtersTitle}</h2>
        <p>{translations.clearAllFiltersText}</p>
      </div>
      <ShowAllFilters/>
    </div>
    {filtersConfig.map((filterConfig, index) => <div className={'filterElementContainer'}>
      <FilterElement key={index} filterConfig={filterConfig}/>
    </div>)}
  </div>
}
