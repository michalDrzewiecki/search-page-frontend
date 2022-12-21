import { LanguageEnum, TranslationComponentNameEnum } from '../../../../enum';
import { ProductAmountTranslationData } from '../../../../interfaces';
import { useSelector } from '../../../../store/redux/useSelector';
import { getTranslation } from '../../../../utils';
import { ProductCounterPropsInterface } from './product-counter-props.interface';
import './product-counter.scss';

export const ProductCounter = ({productAmount}: ProductCounterPropsInterface) => {
  const language: LanguageEnum = useSelector(state => state.languageConfig.language);
  const translations = getTranslation(language, TranslationComponentNameEnum.productAmount) as ProductAmountTranslationData;

  return <div className={'productCounter'}>
    {`(${productAmount} ${translations.resultSuffix})`}
  </div>
}
