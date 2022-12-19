import { LanguageEnum, TranslationComponentNameEnum } from '../../../../enum';
import { useSelector } from '../../../../store/redux/useSelector';
import './title-header.scss';
import { getTranslation } from '../../../../utils';

export const TitleHeader = () => {
  const language: LanguageEnum = useSelector(state => state.languageConfig.language);
  const translations = getTranslation(language, TranslationComponentNameEnum.productRecommendedList);

  return <div className={'titleHeader'}>
    <h2>{translations.titleHeader}</h2>
  </div>
}
