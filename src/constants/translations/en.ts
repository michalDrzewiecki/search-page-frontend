import { TranslationComponentNameEnum } from '../../enum';
import { TranslationInterface } from '../../interfaces';

const translation: TranslationInterface = {
  [TranslationComponentNameEnum.productRecommendedList]: {
    titleHeader: 'Recommended in category'
  },
  [TranslationComponentNameEnum.productAmount]: {
    resultSuffix: 'results',
    singleResultSuffix: 'result'
  },
  [TranslationComponentNameEnum.filters]: {
    filtersTitle: 'Filters',
    clearAllFiltersText: 'Clear all',
    showAllFiltersText: 'Show all filters',
    selectAllFiltersText: 'Select all',
    selectAllCategories: 'All categories'
  },
  [TranslationComponentNameEnum.searchDetailsHeader]: {
    of: 'of'
  },
  [TranslationComponentNameEnum.header]: {
    searchInputIntroText: 'What are You looking for?'
  }
};

export default translation;
