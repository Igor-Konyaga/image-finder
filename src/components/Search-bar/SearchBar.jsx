import css from './SearchBar.module.css';
import { ReactComponent as Icon } from '../icon/search-svgrepo-com.svg';
import { useState } from 'react';

export const SearchBar = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

 const reset = () => {
    setSearchValue('');
  };

  const handleInput = e => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(searchValue);

    reset();
  };

  return (
    <header className={css.Searchbar}>
      <form action="#" onSubmit={handleSubmit} className={css.SearchForm}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
          <Icon />
        </button>
        <input
          type="text"
          autoComplete="off"
          name="searchQuery"
          value={searchValue}
          onChange={handleInput}
          autoFocus
          className={css.SearchFormInput}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
