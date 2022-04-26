/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import Header from '../Components/Header';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      inputNameSearch: '',
      buttonTrueSearch: true,

    };
  }

    onInput = ({ target }) => {
      const { name, value } = target;
      this.setState({ [name]: value }, () => {
        const { inputNameSearch } = this.state;
        const numberDois = 2;
        if (inputNameSearch.length >= numberDois) {
          this.setState({ buttonTrueSearch: false });
        } else {
          this.setState({ buttonTrueSearch: true });
        }
      });
    }

    render() {
      const { inputNameSearch, buttonTrueSearch } = this.state;
      return (
        <div data-testid="page-search">
          <Header />
          <form>
            <label htmlFor="text">
              <input
                name="inputNameSearch"
                type="text"
                data-testid="search-artist-input"
                value={ inputNameSearch }
                onChange={ this.onInput }
              />
            </label>
            <button
              data-testid="search-artist-button"
              type="button"
              disabled={ buttonTrueSearch }
              onClick={ this.createClick }
            >
              Pesquisar
            </button>
          </form>
        </div>
      );
    }
}
export default Search;
