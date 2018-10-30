import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShapes } from '@fortawesome/free-solid-svg-icons';

import ErrorHOC from '@hoc';
import ClassTable from '@containers/ClassTable';
import CommonLayout from '@layouts/CommonLayout';
import { Button } from "@components";

class Class extends React.Component {
  state = {
    classModalVisible: false
  }
  _handleClassModal = (type) => {
    if(type === "open") {
      this.setState(state => ({
        classModalVisible: true
      }))
    } else {
      this.setState(state => ({
        classModalVisible: false
      }))
    }
  }
  render() {
    return (
      <CommonLayout>
        <Header>
          <Title>
            <FontAwesomeIcon icon={faShapes}/>
            &nbsp;클래스
          </Title>
          <Search>
            <Row>학생 추가, 수정, 검색기능을 할 수 있습니다.</Row>
            <Row>
              <Button onClick={() => this._handleClassModal("open")} height="30px" positive>+ 클래스 추가</Button>
            </Row>
          </Search>
        </Header>
        <ClassTable/>
      </CommonLayout>
    )
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(Class));

const Header = styled.div`
  height: 60px;
  margin-bottom: 10px;
`
const Title = styled.div`
  font-size: 48px;
  line-height: 48px;
  float: left;
`
const Search = styled.div`
  color: ${props => props.theme._components.gray}
  float: left;
  margin-left: 20px;
`
const Row = styled.div`
  height: 30px;
  line-height: 30px;
`
