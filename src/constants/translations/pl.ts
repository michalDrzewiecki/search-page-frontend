import { TranslationComponentNameEnum } from '../../enum';
import { TranslationInterface } from '../../interfaces';

const translation: TranslationInterface = {
  [TranslationComponentNameEnum.productRecommendedList]: {
    titleHeader: 'Polecane w kategorii'
  },
  [TranslationComponentNameEnum.productAmount]: {
    resultSuffix: 'wyniki'
  }
};

export default translation;
