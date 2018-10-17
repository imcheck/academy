import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ErrorHOC from '@hoc';
import { init } from '@redux/actions/userActions';

class PageLoad extends React.Component {
  render() {
    if(this.props.pageLoading) {
      return <Loading>Loading</Loading>;
    } else {
      return this.props.children;
    }
  }
  componentDidMount() {
    this.props.init();
  }
}

const mapStateToProps = state => ({
  pageLoading: state.page.pageLoading
});

const mapDispatchToState = dispatch => ({
  init: () => dispatch(init())
});

export default ErrorHOC(connect(mapStateToProps, mapDispatchToState)(PageLoad));


const Loading = styled.div``;