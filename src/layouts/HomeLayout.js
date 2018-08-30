import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ErrorHOC from '@hoc';
import { init } from '@redux/actions/pageActions';

const Container = styled.div``;

class HomeLayout extends React.Component {
  componentDidMount() {
    this.props.init();
  }
  render() {
    return (
      <Container>
      </Container>
    );
  }
};

const mapStateToProps = state => ({
});
const mapDispatchToProps = dispatch => ({
  init: () => dispatch(init())
});
export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(HomeLayout));