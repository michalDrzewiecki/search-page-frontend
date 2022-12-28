import { DEFAULT_APP_LANGUAGE } from '../constants';
import { LanguageEnum } from '../enum';

const languageData: Record<string, LanguageEnum> = {
  'en-GB': LanguageEnum.en,
  'pl-PL': LanguageEnum.pl
}

export const mapLanguage = (language: string): LanguageEnum => {
  return languageData[language] || DEFAULT_APP_LANGUAGE;
}
