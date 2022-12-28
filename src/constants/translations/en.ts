import { TranslationComponentNameEnum } from '../../enum';
import { TranslationInterface } from '../../interfaces';

const translation: TranslationInterface = {
  [TranslationComponentNameEnum.productRecommendedList]: {
    titleHeader: 'Recommended'
  },
  [TranslationComponentNameEnum.productAmount]: {
    resultSuffix: 'results',
    singleResultSuffix: 'result'
  },
  [TranslationComponentNameEnum.filters]: {
    filtersTitle: 'Filters',
    clearAllFiltersText: 'Clear all',
    showAllFiltersText: 'Show all filters',
    selectAllFiltersText: 'Select all'
  },
  [TranslationComponentNameEnum.searchDetailsHeader]: {
    of: 'of'
  }
};

export default translation;
