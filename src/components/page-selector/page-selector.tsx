import React, { useEffect, useRef, useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { useDispatch } from 'react-redux';
import { DEFAULT_PRODUCT_AMOUNT, numericRegex } from '../../constants';
import { LanguageEnum, TranslationComponentNameEnum } from '../../enum';
import useKeyPressedHook from '../../hooks/use-key-pressed.hook';
import { SearchDetailsHeaderData } from '../../interfaces';
import { changeOffset } from '../../store/redux/actions/filters';
import { useSelector } from '../../store/redux/useSelector';
import { calculateOffsetBasedOnPage, calculatePageBasedOnOffset, getTranslation } from '../../utils';
import './page-selector.scss';

export const PageSelector = () => {
  const language: LanguageEnum = useSelector(state => state.languageConfig.language);
  const translations = getTranslation(language, TranslationComponentNameEnum.searchDetailsHeader) as SearchDetailsHeaderData;
  const productAmount = useSelector(state => state.productData.productAmount);
  const filtersData = useSelector(state => state.filtersData);

  const [pageAmount, setPageAmount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<string>('1');
  const currentPageInputRef = useRef<HTMLInputElement | null>(null);
  const lastPage = useRef<number>(0);
  const enterPressed = useKeyPressedHook('Enter');
  const dispatch = useDispatch();

  const calculatePagesAmount = () => {
    return Math.ceil(productAmount / DEFAULT_PRODUCT_AMOUNT);
  };

  const changeCurrentPageInFilters = (page?: number): void => {
    const currentPageValue = currentPage ? +currentPage : 1;
    if (!currentPage) {
      setCurrentPage('1');
    }
    const dispatchedPage = page || currentPageValue;
    if (!lastPage.current || lastPage.current !== dispatchedPage) {
      dispatch(changeOffset(calculateOffsetBasedOnPage(dispatchedPage)));
      lastPage.current = dispatchedPage;
    }
  }

  const handleCurrentPageInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    if (
      value &&
      (
        !numericRegex.test(value) ||
        +value < 1 ||
        +value > pageAmount
      )
    ) {
      return;
    }
    setCurrentPage(value);
  };

  useEffect(() => {
    setPageAmount(calculatePagesAmount());
  }, [productAmount]);

  useEffect(() => {
    if (
      enterPressed &&
      currentPageInputRef.current &&
      document.activeElement === currentPageInputRef.current
    ) {
      currentPageInputRef.current.blur();
    }
  }, [enterPressed])

  useEffect(() => {
    const {offset} = filtersData.pagination;
    const newCurrentPageValue = calculatePageBasedOnOffset(offset).toString();
    if (newCurrentPageValue !== currentPage) {
      setCurrentPage(newCurrentPageValue);
    }
  }, [filtersData.pagination.offset])

  const changeCurrentPageValue = (value: number): void => {
    if (
      value < 0 &&
      !decreaseEnabled() ||
      value > 0 &&
      !increaseEnabled()
    ) {
      return;
    }
    const currentPageValue = +currentPage;
    const newValue = currentPageValue + value
    setCurrentPage(newValue.toString());
    changeCurrentPageInFilters(newValue);
  }

  const decreaseEnabled = (): boolean => currentPage !== '1';
  const increaseEnabled = (): boolean => +currentPage < pageAmount;

  return <div className={'pageSelector'}>
    <div
      className={decreaseEnabled() ? 'changePageButtonContainer' : 'changePageButtonContainerDisabled'}
      onClick={() => changeCurrentPageValue(-1)}
    >
      <SlArrowLeft/>
    </div>
    <div className={'pageInputContainer'}>
      <input
        type={'text'}
        value={currentPage}
        onChange={handleCurrentPageInputChange}
        onBlur={() => changeCurrentPageInFilters()}
        ref={currentPageInputRef}
        className={'pageInput'}
      />
    </div>
    <div className={'pageAmountTextContainer'}>
      {`${translations.of} ${pageAmount}`}
    </div>
    <div
      className={increaseEnabled() ? 'changePageButtonContainer' : 'changePageButtonContainerDisabled'}
      onClick={() => changeCurrentPageValue(1)}
    >
      <SlArrowRight/>
    </div>
  </div>
}
