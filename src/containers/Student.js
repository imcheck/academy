import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

import ErrorHOC from '@hoc';
import StudentTable from '@containers/StudentTable';
import StudentEditModal from '@containers/StudentEditModal';
import CommonLayout from '@layouts/CommonLayout';
import { Button } from '@components';
import { Student } from '@models';

class _Student extends React.Component {
  state = {
    studentModalVisible: false
  }
  _handleStudentModal = (type) => {
    if (type === "open") {
      this.setState(state => ({
        studentModalVisible: true
      }));
    } else {
      this.setState(state => ({
        studentModalVisible: false
      }))
    }
  }

  render() {
    return (
      <CommonLayout>
        <Header>
          <Title>
            <FontAwesomeIcon icon={faUsers} />
            &nbsp;학생
            </Title>
          <Search>
            <Row>학생 추가, 수정, 검색기능을 할 수 있습니다.</Row>
            <Row>
              <Button onClick={() => this._handleStudentModal("open")} height="30px" positive>+ 학생 추가</Button>
            </Row>
          </Search>
        </Header>
        <StudentTable />
        <StudentEditModal
          student={new Student()}
          visible={this.state.studentModalVisible}
          onClose={() => this._handleStudentModal("close")} />
      </CommonLayout>
    )
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(_Student));

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
