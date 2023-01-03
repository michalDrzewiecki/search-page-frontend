import React, { useEffect, useState } from 'react';
import { BsCartPlus } from 'react-icons/bs';
import { numericRegex } from '../../../../../../../constants';
import { BucketPropsInterface } from './bucket-props.interface';
import './bucket.scss';

export const Bucket = ({isAvailable, translations}: BucketPropsInterface) => {
  const [productAmount, setProductAmount] = useState<string>(isAvailable ? '1' : '0');

  const handleProductAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (
      value &&
      (
        !numericRegex.test(value) ||
        +value < 1
      )
    ) {
      return;
    }
    setProductAmount(value);
  }

  return <div className={'bucketContainer'}>
    <div className={'productAmountContainer'}>
      <input
        type={'text'}
        value={productAmount}
        onChange={handleProductAmountChange}
        className={isAvailable ? 'productAmountInput' : 'unavailableProductAmountInput'}
      />
    </div>
    <div className={isAvailable ? 'bucketBox' : 'bucketBoxUnavailable'}>
      <BsCartPlus className={'cartIcon'}/>
      {translations.addToCartText}
    </div>
  </div>
}
