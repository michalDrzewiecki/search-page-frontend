import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeSearch } from '../../../../store/redux/actions/filters';
import { useSelector } from '../../../../store/redux/useSelector';
import './search.scss';

export const Search = () => {
  const [searchText, setSearchText] = useState<string>('');
  const searchData = useSelector(state => state.filtersData.search);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchData !== searchText) {
      setSearchText(searchData);
    }
  }, [searchData]);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchText(event.target.value);
  }

  const handleSearch = (): void => {
    dispatch(changeSearch(searchText));
  }

  return <div className={'search'}>
    <input
      type={'text'}
      value={searchText}
      onChange={handleSearchInputChange}
    />
    <button onClick={handleSearch}>szukaj</button>
  </div>
}
