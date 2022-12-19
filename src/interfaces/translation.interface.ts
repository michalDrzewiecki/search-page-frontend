import { TranslationComponentNameEnum } from '../enum';

export interface ProductRecommendedListTranslationData {
  titleHeader: string;
}

export interface TranslationInterface {
  [TranslationComponentNameEnum.productRecommendedList]: ProductRecommendedListTranslationData;
}
