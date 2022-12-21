import { LanguageEnum, TranslationComponentNameEnum } from '../../../../enum';
import { ProductRecommendedListTranslationData } from '../../../../interfaces';
import { useSelector } from '../../../../store/redux/useSelector';
import './title-header.scss';
import { getTranslation } from '../../../../utils';

export const TitleHeader = () => {
  const language: LanguageEnum = useSelector(state => state.languageConfig.language);
  const translations = getTranslation(language, TranslationComponentNameEnum.productRecommendedList) as ProductRecommendedListTranslationData;

  return <div className={'titleHeader'}>
    <h2>{translations.titleHeader}</h2>
  </div>
}
