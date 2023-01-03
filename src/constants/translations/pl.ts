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
    selectAllFiltersText: 'Zaznacz wszystkie',
    selectAllCategories: 'Wszystkie kategorie'
  },
  [TranslationComponentNameEnum.searchDetailsHeader]: {
    of: 'z'
  },
  [TranslationComponentNameEnum.header]: {
    searchInputIntroText: 'Czego szukasz?'
  },
  [TranslationComponentNameEnum.searchHeader]: {
    productsText: 'Produkty'
  },
  [TranslationComponentNameEnum.modal]: {
    closeModalText: 'Zamknij okno'
  },
  [TranslationComponentNameEnum.productDetails]: {
    saveText: 'Oszczędź',
    addToCartText: 'Dodaj do koszyka',
    availableText: 'Dostępny',
    unavailableText: 'Niedostępny',
    availableInText: 'Dostępny w:'
  }
};

export default translation;
