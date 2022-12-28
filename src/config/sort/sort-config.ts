import { LanguageEnum } from '../../enum';
import { SortOptionInterface } from './interfaces';
import enSortConfig from './locations/en';
import plSortConfig from './locations/pl';

const sortConfigData = {
  [LanguageEnum.en]: enSortConfig,
  [LanguageEnum.pl]: plSortConfig
};

export const sortConfig = (language?: LanguageEnum): SortOptionInterface[] => language ? sortConfigData[language] || enSortConfig : enSortConfig;

