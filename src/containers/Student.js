import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

import ErrorHOC from '@hoc';
import StudentTable from '@containers/StudentTable';
import CommonLayout from '@layouts/CommonLayout';
import Filter from '@containers/TableFilter';
import { Button } from '@components';

class Student extends React.Component {
  render() {
    return (
      <CommonLayout>
        <Header>
          <Title>
            <FontAwesomeIcon icon={faUserGraduate}/>
            &nbsp;학생
          </Title>
          <Container>
            <Row>학생 추가, 수정, 검색기능을 할 수 있습니다.</Row>
            <Row>
              <Button height="30px" type="green">학생 추가</Button>
            </Row>
          </Container>
        </Header>
        <Filter type="student"/>
        <StudentTable />
      </CommonLayout>
    )
  }
}

const mapStateToProps = (state) => ({
});
const mapDispatchToProps = (dispatch) => ({
});

export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(Student));

const Header = styled.div`
  height: 60px;
  margin-bottom: 10px;
`
const Title = styled.div`
  font-size: 48px;
  line-height: 48px;
  float: left;
`
const Container = styled.div`
  color: ${props => props.theme._components.gray}
  float: left;
  margin-left: 20px;
`
const Row = styled.div`
  height: 30px;
  line-height: 30px;
`
