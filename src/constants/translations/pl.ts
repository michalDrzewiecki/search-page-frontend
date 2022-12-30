import { TranslationComponentNameEnum } from '../../enum';
import { TranslationInterface } from '../../interfaces';

const translation: TranslationInterface = {
  [TranslationComponentNameEnum.productRecommendedList]: {
    titleHeader: 'Polecane'
  },
  [TranslationComponentNameEnum.productAmount]: {
    resultSuffix: 'wyników',
    singleResultSuffix: 'wynik'
  },
  [TranslationComponentNameEnum.filters]: {
    filtersTitle: 'Filtry',
    clearAllFiltersText: 'Wyczyść wszystkie',
    showAllFiltersText: 'Pokaż wszystkie filtry',
    selectAllFiltersText: 'Zaznacz wszystkie',
    selectAllCategories: 'Wszystkie kategorie'
  },
  [TranslationComponentNameEnum.searchDetailsHeader]: {
    of: 'z'
  },
  [TranslationComponentNameEnum.header]: {
    searchInputIntroText: 'Czego szukasz?'
  }
};

export default translation;
