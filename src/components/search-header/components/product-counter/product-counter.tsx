import { LanguageEnum, TranslationComponentNameEnum } from '../../../../enum';
import { ProductAmountTranslationData } from '../../../../interfaces';
import { useSelector } from '../../../../store/redux/useSelector';
import { getTranslation } from '../../../../utils';
import { ProductCounterPropsInterface } from './product-counter-props.interface';
import './product-counter.scss';

export const ProductCounter = ({productAmount}: ProductCounterPropsInterface) => {
  const language: LanguageEnum = useSelector(state => state.languageConfig.language);
  const {singleResultSuffix, resultSuffix} = getTranslation(language, TranslationComponentNameEnum.productAmount) as ProductAmountTranslationData;

  return <div className={'productCounter'}>
    {`(${productAmount} ${productAmount === 1 ? singleResultSuffix : resultSuffix})`}
  </div>
}
