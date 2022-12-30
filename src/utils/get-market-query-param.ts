import { LanguageEnum } from '../enum';

export const getMarketQueryParam = (language: LanguageEnum): string => `market=${language}`;
