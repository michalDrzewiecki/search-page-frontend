import { LanguageEnum, TranslationComponentNameEnum } from '../../../../enum';
import { FiltersTranslationData } from '../../../../interfaces';
import { useSelector } from '../../../../store/redux/useSelector';
import { getTranslation } from '../../../../utils';
import './show-all-filters.scss';

export const ShowAllFilters = () => {
  const language: LanguageEnum = useSelector(state => state.languageConfig.language);
  const translations = getTranslation(language, TranslationComponentNameEnum.filters) as FiltersTranslationData;

  return <div className={'showAllFiltersContainer'}>
    <button>{translations.showAllFiltersText}</button>
  </div>
}
