import { TranslationComponentNameEnum } from '../enum';

export interface ProductRecommendedListTranslationData {
  titleHeader: string;
}

export interface ProductAmountTranslationData {
  resultSuffix: string;
}

export interface TranslationInterface {
  [TranslationComponentNameEnum.productRecommendedList]: ProductRecommendedListTranslationData;
  [TranslationComponentNameEnum.productAmount]: ProductAmountTranslationData;
}
