import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

import ErrorHOC from '@hoc';
import StudentTable from '@containers/StudentTable';
import CommonLayout from '@layouts/CommonLayout';
import Filter from '@containers/TableFilter';

class Student extends React.Component {
  render() {
    return (
      <CommonLayout>
        <Title>
          <FontAwesomeIcon icon={faUserGraduate}/>
          &nbsp;학생
        </Title>
        <Filter type="student" />
        <StudentTable />
      </CommonLayout>
    )
  }
  componentDidMount() {

  }
}

const mapStateToProps = (state) => ({
});
const mapDispatchToProps = (dispatch) => ({
});

export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(Student));

const Title = styled.div`
  text-align: center;
  font-size: 48px;
  line-height: 48px;
  margin-bottom: 10px;
`