import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

import ErrorHOC from '@hoc';
import Search from '@containers/Search';

class StudentLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <Search />
        </Container>
      </Layout>
    )
  }
  componentDidMount() {

  }
}

const mapStateToProps = (state) => ({
});
const mapDispatchToProps = (dispatch) => ({

});

export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(StudentLayout));
const Layout = styled.div`
  padding: 20px;
`;

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`