import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { DEFAULT_PRODUCT_AMOUNT } from '../../constants';
import { LanguageEnum, TranslationComponentNameEnum } from '../../enum';
import useKeyPressedHook from '../../hooks/use-key-pressed.hook';
import { SearchDetailsHeaderData } from '../../interfaces';
import { changeOffset } from '../../store/redux/actions/filters';
import { useSelector } from '../../store/redux/useSelector';
import { getTranslation } from '../../utils';
import './page-selector.scss';

export const PageSelector = () => {
  const language: LanguageEnum = useSelector(state => state.languageConfig.language);
  const translations = getTranslation(language, TranslationComponentNameEnum.searchDetailsHeader) as SearchDetailsHeaderData;
  const productAmount = useSelector(state => state.productData.productAmount);
  const paginationData = useSelector(state => state.filtersData.pagination);

  const [pageAmount, setPageAmount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<string>('1');
  const currentPageInputRef = useRef<HTMLInputElement | null>(null);
  const enterPressed = useKeyPressedHook('Enter');
  const dispatch = useDispatch();

  const calculatePagesAmount = () => {
    return Math.ceil(productAmount / DEFAULT_PRODUCT_AMOUNT);
  };

  const changeCurrentPageInFilters = (page?: number): void => {
    const currentPageValue = +currentPage;
    console.log(currentPageValue);
    dispatch(changeOffset(((page || currentPageValue) - 1) * DEFAULT_PRODUCT_AMOUNT));
  }

  const handleCurrentPageInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setCurrentPage(value);
  };

  useEffect(() => {
    setPageAmount(calculatePagesAmount());
    setCurrentPage('1');
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
    const {offset} = paginationData;
    console.log(offset);
    const newCurrentPageValue = (offset / DEFAULT_PRODUCT_AMOUNT + 1).toString();
    if (newCurrentPageValue !== currentPage) {
      setCurrentPage(newCurrentPageValue);
    }
  }, [paginationData.offset])

  const changeCurrentPageValue = (value: number): void => {
    const currentPageValue = +currentPage;
    const newValue = currentPageValue + value
    setCurrentPage(newValue.toString());
    changeCurrentPageInFilters(newValue);
  }

  return <div className={'pageSelector'}>
    <button onClick={() => changeCurrentPageValue(-1)}>{'<'}</button>
    <input
      type={'text'}
      value={currentPage}
      onChange={handleCurrentPageInputChange}
      onBlur={() => changeCurrentPageInFilters()}
      ref={currentPageInputRef}
    />
    {`${translations.of} ${pageAmount}`}
    <button onClick={() => changeCurrentPageValue(1)}>{'>'}</button>
  </div>
}
