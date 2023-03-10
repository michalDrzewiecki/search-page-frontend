import { TranslationComponentNameEnum } from '../enum';

export interface ProductRecommendedListTranslationData {
  titleHeader: string;
}

export interface ProductAmountTranslationData {
  resultSuffix: string;
  singleResultSuffix: string;
}

export interface FiltersTranslationData {
  filtersTitle: string;
  clearAllFiltersText: string;
  showAllFiltersText: string;
  selectAllFiltersText: string;
  selectAllCategories: string;
}

export interface SearchDetailsHeaderData {
  of: string;
}

export interface HeaderData {
  searchInputIntroText: string;
}

export interface SearchHeaderData {
  productsText: string;
}

export interface ModalData {
  closeModalText: string;
}

export interface ProductDetailsData {
  saveText: string;
  addToCartText: string;
  availableText: string;
  unavailableText: string;
  availableInText: string;
}

export interface TranslationInterface {
  [TranslationComponentNameEnum.productRecommendedList]: ProductRecommendedListTranslationData;
  [TranslationComponentNameEnum.productAmount]: ProductAmountTranslationData;
  [TranslationComponentNameEnum.filters]: FiltersTranslationData;
  [TranslationComponentNameEnum.searchDetailsHeader]: SearchDetailsHeaderData;
  [TranslationComponentNameEnum.header]: HeaderData;
  [TranslationComponentNameEnum.searchHeader]: SearchHeaderData;
  [TranslationComponentNameEnum.modal]: ModalData;
  [TranslationComponentNameEnum.productDetails]: ProductDetailsData;
}
