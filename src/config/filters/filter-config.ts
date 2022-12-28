import { LanguageEnum } from '../../enum';
import plFilterConfig from './locations/pl';
import enFilterConfig from './locations/en';
import { FilterElementType } from './types';

const filterConfigData = {
  [LanguageEnum.en]: enFilterConfig,
  [LanguageEnum.pl]: plFilterConfig
}

export const filterConfig = (language?: LanguageEnum): FilterElementType[] => language ? filterConfigData[language] || enFilterConfig : enFilterConfig;
