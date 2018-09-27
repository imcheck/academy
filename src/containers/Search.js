import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ErrorHOC from '@hoc';
import { Input } from '@components';

import { updatePage } from '@redux/actions/pageActions';

class Search extends React.PureComponent {
  _handleSearch = () => {
  }
  _handleChangeInput = (e) => {
    const params = [{
      path: ["search", "text"],
      data: e.target.value
    }];
    this.props.updatePage(params);
  }
  render() {
    return (
      <Container>
        <Input
          // defaultValue={this.props.search.get("text")}
          placeholder="통합검색"
          onKeyUp={(e) => e.which==13 ? this._handleSearch() : null}
          onChange={this._handleChangeInput}
        />
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  search: state.page.search
});
const mapDispatchToProps = (dispatch) => ({
  updatePage: params => dispatch(updatePage(params))
});

export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(Search));
const Container = styled.div`
  height: 40px;
  width: 100%;
  padding: 0px 10px 0px 5px;
`;