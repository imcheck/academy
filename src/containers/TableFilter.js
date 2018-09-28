import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ErrorHOC from '@hoc';
import { SearchFilter } from '@components';

class TableFilter extends React.Component {
  _getOptions = (type) => {
    switch(type) {
      case "student":
        return [
          { value:"name", text: "이름" },
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
  render() {
    return (
      <Container>
        <SearchFilter
          options={this._getOptions(this.props.type)}
          optionIndex={0}/>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({

});

export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(TableFilter));
const Container = styled.div``