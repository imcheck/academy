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
    console.log(e.target.value);
  }
  _handleSearchTextChange = (e) => {
    console.log(e.target.value);
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
        />
      </Container>
    )
  }
  componentDidMount() {
    const params = [{
      path: ["student", "search", "optionValue"],
      data: this._getOptions(this.props.type)[0].value
    }];
    this.props.updatePage(params);
  }
}

const mapStateToProps = (state) => ({
  search: state.page.student.search
});
const mapDispatchToProps = (dispatch) => ({
  updatePage: params => dispatch(updatePage(params))
});

export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(TableFilter));
const Container = styled.div``