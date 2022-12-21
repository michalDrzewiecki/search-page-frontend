import { TranslationComponentNameEnum } from '../enum';

export interface ProductRecommendedListTranslationData {
  titleHeader: string;
}

export interface ProductAmountTranslationData {
  resultSuffix: string;
}

export interface FiltersTranslationData {
  filtersTitle: string;
  clearAllFiltersText: string;
  showAllFiltersText: string;
  selectAllFiltersText: string;
}

export interface TranslationInterface {
  [TranslationComponentNameEnum.productRecommendedList]: ProductRecommendedListTranslationData;
  [TranslationComponentNameEnum.productAmount]: ProductAmountTranslationData;
  [TranslationComponentNameEnum.filters]: FiltersTranslationData;
}
