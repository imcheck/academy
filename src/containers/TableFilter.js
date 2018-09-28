import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ErrorHOC from '@hoc';
import { SearchFilter } from '@components';
import { updatePage } from '@redux/actions/pageActions';

class TableFilter extends React.Component {
  _getOptions = (type) => {
    switch(type) {
      case "student":
        return [
          { value: "", text: "전체" },
          { value: "name", text: "이름" },
          { value: "school", text: "학교" },
          { value: "tel", text: "전화번호"}
        ];
      case "class":
        break;
      case "teacher":
        break;
      default:
        throw new Error("type is undefined");
    }
  }
  _handleOptionChange = (e) => {
    const { type } = this.props;
    const params = [{
      path: [type, "search", "optionValue"],
      data: e.target.value
    }];
    this.props.updatePage(params);
  }
  _handleSearchTextChange = (e) => {
    const params = [{
      path: [type, "search", "text"],
      data: e.target.value
    }];
    this.props.updatePage(params);
  }
  _handleSearchClick = () => {
    alert("Search Click");
  }
  render() {
    const options = this._getOptions(this.props.type);
    return (
      <Container>
        <SearchFilter
          options={options}
          value={this.props.search.optionValue}
          onOptionChange={this._handleOptionChange}
          onChange={this._handleSearchTextChange}
          onSearchClick={this._handleSearchClick}
        />
      </Container>
    )
  }
  componentDidMount() {
    const { type } = this.props;
    const params = [{
      path: [type, "search", "optionValue"],
      data: this._getOptions(this.props.type)[0].value
    }];
    this.props.updatePage(params);

    console.log(this.props.state);
  }
}

const mapStateToProps = (state) => ({
  search: state.page.student.search,
  state
});
const mapDispatchToProps = (dispatch) => ({
  updatePage: params => dispatch(updatePage(params))
});

export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(TableFilter));
const Container = styled.div``