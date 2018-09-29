import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ErrorHOC from '@hoc';
import { SearchFilter } from '@components';
import { updatePage } from '@redux/actions/pageActions';
import { getTableData } from '@redux/actions/requestActions';

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
        return [
          { value: "", text: "전체" },
          { value: "name", text: "이름" },
          { value: "day", text: "요일" },
          { value: "teacher", text: "선생님"}
        ]
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
    const { type } = this.props;
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
    let params;
    params = [{
      path: [type, "search", "optionValue"],
      data: this._getOptions(this.props.type)[0].value
    }];
    this.props.updatePage(params);

    params = {
      type
    }
    this.props.getTableData(params);
  }
}

const mapStateToProps = (state) => ({
  search: state.page.getIn([state.router.location.pathname.slice(1), "search"]),
});
const mapDispatchToProps = (dispatch) => ({
  updatePage: params => dispatch(updatePage(params)),
  getTableData: params => dispatch(getTableData(params))
});

export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(TableFilter));
const Container = styled.div``