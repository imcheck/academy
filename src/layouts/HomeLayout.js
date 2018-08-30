import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ErrorHOC from '@hoc';
import { init } from '@redux/actions/pageActions';

const Container = styled.div``;

const Header = styled.div`
  border-bottom: 3px solid lightblue;
`
const Button = styled.button``
class HomeLayout extends React.Component {
  componentDidMount() {
    this.props.init();
  }
  render() {
    return (
      <Container>
        HOME
      </Container>
    );
  }
};

const mapStateToProps = state => ({
  component: state.page.get("component")
});
const mapDispatchToProps = dispatch => ({
  init: () => dispatch(init())
});
export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(HomeLayout));