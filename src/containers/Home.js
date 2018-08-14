import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ErrorHOC from '@hoc';
import { init } from '@redux/actions/pageActions';

const Container = styled.div`
  height: 30px;
  background-color: blue;
  color: white;
`;

class Home extends React.Component {
  componentDidMount() {
    this.props.init();
  }
  render() {
    let Content = this.props.component;
    if(!Content) Content = () => <div>Loading...</div>;
    return <Container><Content /></Container>;
  }
};

const mapStateToProps = state => ({
  component: state.page.get("component")
});
const mapDispatchToProps = dispatch => ({
  init: (params) => dispatch(init())
});
export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(Home));