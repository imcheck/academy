import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faShapes, faCreditCard, faCalculator, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

import ErrorHOC from '@hoc';

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <Link to="/student">
            <StudentManagement>
              <FontAwesomeIcon icon={faUsers} size="7x" />
              <Text>학생 관리</Text>
            </StudentManagement>
          </Link>
          <Link to="/lecture">
            <ClassManagement>
              <FontAwesomeIcon icon={faShapes} size="7x" />
              <Text>클래스 관리</Text>
            </ClassManagement>
          </Link>
          <Link to="/teacher">
            <TeacherManagement>
              <FontAwesomeIcon icon={faChalkboardTeacher} size="7x" />
              <Text>강사 관리</Text>
            </TeacherManagement>
          </Link>
        </Container>
        <Container>
          <Link to="/receipt">
            <ReceiptManagement>
              <FontAwesomeIcon icon={faCreditCard} size="7x" />
              <Text>수납 관리</Text>
            </ReceiptManagement>
          </Link>
          <Link to="/financial">
            <FinancialManagement>
              <FontAwesomeIcon icon={faCalculator} size="7x" />
              <Text>회계 관리</Text>
            </FinancialManagement>
          </Link>
        </Container>
      </Layout>
    );
  }
};

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});
export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(Home));

const Layout = styled.div`
  padding-top: calc(50vh - 400px)
`;
const Container = styled.div`
  margin: 0 auto;
  display: flex;
  width: fit-content;
`
const Button = styled.div`
  width: 200px;
  height: 200px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid gray;
  margin: 5px 5px;
  box-shadow: 5px 5px 5px gray;
  padding: 30px;
  color: white;
`
const StudentManagement = styled(Button)`
  background-color: ${props => props.theme._components.blue};
  &:hover {
    background-color: ${props => props.theme._components.blue2}
  }
`
const ClassManagement = styled(Button)`
  background-color: ${props => props.theme._components.green};
  &:hover {
    background-color: ${props => props.theme._components.green2}
  }
`
const ReceiptManagement = styled(Button)`
  background-color: ${props => props.theme._components.purple};
  &:hover {
    background-color: ${props => props.theme._components.purple2}
  }
`
const FinancialManagement = styled(Button)`
  background-color: ${props => props.theme._components.gray};
  &:hover {
    background-color: ${props => props.theme._components.gray2}
  }
`

const TeacherManagement = styled(Button)`
  background-color: ${props => props.theme._components.pink}
  &:hover {
    background-color: ${props => props.theme._components.pink2}
  }
`

const Text = styled.div`
  font-size: 20px;
  margin-top: 10px;
`
