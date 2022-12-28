import { LanguageEnum, TranslationComponentNameEnum } from '../enum';
import plTranslation from '../constants/translations/pl';
import enTranslation from '../constants/translations/en';

export const getTranslation = (language: LanguageEnum, componentName: TranslationComponentNameEnum) => {
  const translationObject = getTranslationData(language);
  return translationObject[componentName];
}

const getTranslationData = (language: LanguageEnum) => {
  const translationObjects = {
    [LanguageEnum.pl]: plTranslation,
    [LanguageEnum.en]: enTranslation
  }
  return translationObjects[language];
}
