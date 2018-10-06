import React from 'react';

import { SearchFilter } from '@components';
import { updatePage } from '@redux/actions/pageActions';

class TableFilter extends React.Component {
  state = {
    optionValue: "",
    searchText: ""
  }
  _handleOptionChange = (e) => {
    const { value } = e.target;
    this.setState(state => ({
      optionValue: value
    }));
  }
  _handleSearchTextChange = (e) => {
    const { value } = e.target;
    this.setState(state => ({
      searchText: value
    }))
  }
  _handleSearchClick = () => {
    this.props.onSearch(this.state);
  }
  render() {
    const options = this.props.filterOptions;
    return (
      <SearchFilter
        options={options}
        optionValue={this.state.optionValue}
        onOptionChange={this._handleOptionChange}
        value={this.state.searchText}
        onChange={this._handleSearchTextChange}
        onSearchClick={this._handleSearchClick}
      />
    )
  }
}

export default TableFilter;
