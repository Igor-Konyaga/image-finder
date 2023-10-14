import { Component } from 'react';
import css from './SearchBar.module.css';

export class SearchBar extends Component {
  state = {
    searchValue: '',
  };

  reset = () => {
    this.setState({ searchValue: '' });
  };

  handleInput = e => {
    this.setState({ searchValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form
          action="#"
          onSubmit={this.handleSubmit}
          className={css.SearchForm}
        >
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            type="text"
            autoComplete="off"
            name="searchQuery"
            value={this.state.searchValue}
            onChange={this.handleInput}
            autoFocus
            className={css.SearchFormInput}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
