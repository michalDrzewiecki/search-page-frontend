import { LanguageEnum, TranslationComponentNameEnum } from '../enum';
import plTranslation from '../constants/translations/pl';

export const getTranslation = (language: LanguageEnum, componentName: TranslationComponentNameEnum) => {
  const translationObject = getTranslationData(language);
  return translationObject[componentName];
}

const getTranslationData = (language: LanguageEnum) => {
  const translationObjects = {
    [LanguageEnum.pl]: plTranslation
  }
  return translationObjects[language];
}
