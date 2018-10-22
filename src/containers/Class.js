import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShapes } from '@fortawesome/free-solid-svg-icons';

import ErrorHOC from '@hoc';
import ClassTable from '@containers/ClassTable';
import CommonLayout from '@layouts/CommonLayout';

class Class extends React.Component {
  render() {
    return (
      <CommonLayout>
        <Title>
          <FontAwesomeIcon icon={faShapes} />
          &nbsp;클래스 관리
          </Title>
        <ClassTable />
      </CommonLayout>
    )
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(Class));

const Title = styled.div`
  text-align: center;
  font-size: 48px;
  line-height: 48px;
  margin-bottom: 10px;
`
