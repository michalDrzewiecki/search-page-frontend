import './purchase.scss'
import { TranslationComponentNameEnum } from '../../../../../../enum';
import { ProductDetailsData } from '../../../../../../interfaces';
import { useSelector } from '../../../../../../store/redux/useSelector';
import { getTranslation } from '../../../../../../utils';
import { Availability } from './availability/availability';
import { Bucket } from './bucket/bucket';
import { Locations } from './locations/locations';
import { Price } from './price/price';
import { PurchasePropsInterface } from './purchase-props.interface';

export const Purchase = ({price, locations}: PurchasePropsInterface) => {
  const language = useSelector(state => state.languageConfig.language);
  const translations = getTranslation(language, TranslationComponentNameEnum.productDetails) as ProductDetailsData;

  const isAvailable = (): boolean => !!locations.length;
  return <div className={'purchaseContainer'}>
    <div className={'purchaseBox'}>
      <Price price={price} translations={translations}/>
      <Bucket isAvailable={isAvailable()} translations={translations}/>
      <div className={'lineContainer'}>
        <hr className={'line'}/>
      </div>
      <Availability isAvailable={isAvailable()} translations={translations}/>
      {
        isAvailable() ?
          <div>
            <div className={'lineContainer'}>
              <hr className={'line'}/>
            </div>
            <Locations locations={locations} translations={translations}/>
          </div> : null
      }
    </div>
</div>;
}
