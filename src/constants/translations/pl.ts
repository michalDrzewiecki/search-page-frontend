import { TranslationComponentNameEnum } from '../../enum';
import { TranslationInterface } from '../../interfaces';

const translation: TranslationInterface = {
  [TranslationComponentNameEnum.productRecommendedList]: {
    titleHeader: 'Polecane w kategorii'
  },
  [TranslationComponentNameEnum.productAmount]: {
    resultSuffix: 'wyników',
    singleResultSuffix: 'wynik'
  },
  [TranslationComponentNameEnum.filters]: {
    filtersTitle: 'Filtry',
    clearAllFiltersText: 'Wyczyść wszystkie',
    showAllFiltersText: 'Pokaż wszystkie filtry',
    selectAllFiltersText: 'Zaznacz wszystkie'
  },
  [TranslationComponentNameEnum.searchDetailsHeader]: {
    of: 'z'
  }
};

export default translation;
