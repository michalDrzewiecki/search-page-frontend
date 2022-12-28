import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { TranslationComponentNameEnum } from '../../../../enum';
import { HeaderData } from '../../../../interfaces';
import { changeSearch } from '../../../../store/redux/actions/filters';
import { useSelector } from '../../../../store/redux/useSelector';
import { getTranslation } from '../../../../utils';
import './search.scss';

export const Search = () => {
  const [searchText, setSearchText] = useState<string>('');
  const language = useSelector(state => state.languageConfig.language);
  const translations = getTranslation(language, TranslationComponentNameEnum.header) as HeaderData;
  const searchData = useSelector(state => state.filtersData.search);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchData !== searchText) {
      setSearchText(searchData);
    }
  }, [searchData]);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setSearchText(searchText ? value : value.charAt(value.length - 1));
  }

  const handleSearch = (): void => {
    dispatch(changeSearch(searchText));
  }

  return <div className={'search'}>
    <div className={'searchInputContainer'}>
      <input
        type={'text'}
        value={searchText || translations.searchInputIntroText}
        onChange={handleSearchInputChange}
        className={searchText ? 'searchInput' : 'emptySearchInput'}
      />
      <div
        className={'searchButtonContainer'}
        onClick={handleSearch}
      >
        <FiSearch/>
      </div>
    </div>
  </div>
}
