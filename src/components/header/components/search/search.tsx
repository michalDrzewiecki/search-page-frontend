import './search.scss';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeSearch } from '../../../../store/redux/actions/filters';

export const Search = () => {
  const [searchText, setSearchText] = useState<string>('');
  const dispatch = useDispatch();

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
