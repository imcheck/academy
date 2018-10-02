import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

import ErrorHOC from '@hoc';
import StudentTable from '@containers/StudentTable';
import CommonLayout from '@layouts/CommonLayout';
import Filter from '@containers/TableFilter';
import { Button, Modal, InputForm } from '@components';
// import { Student } from '@models';

class _Student extends React.Component {
  state = {
    student: {},
    studentModalVisible: false
  }
  _handleStudentModal = (type) => {
    if(type === "open") {
      this.setState(state => ({
        student: {},
        studentModalVisible: true
      }));
    } else {
      this.setState(state => ({
        studentModalVisible: false
      }))
    }
  }
  _handleStudentEdit = (key, value) => {
    const { student } = this.state;
    student[key] = value;
    this.setState(state => ({
      student
    }), () => console.log(value));
  }
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
              <Button onClick={() => this._handleStudentModal("open")} height="30px" type="green">학생 추가</Button>
            </Row>
          </Container>
        </Header>
        <Filter type="student"/>
        <StudentTable />
        <Modal
          title="학생 추가"
          visible={this.state.studentModalVisible}
          width={800}
          height={600}
          footer={[<Button key="save">저장</Button>, <Button key="close" onClick={() => this._handleStudentModal("close")}>취소</Button>]}>
          <SubTitle>개인 정보</SubTitle>
          <Row2>
            <Col>
              <InputForm
                name="이름"
                value={this.state.student.name}
                onChange={(e) => this._handleStudentEdit("name", e.target.value)}/>
            </Col>
          </Row2>
          <Row2>
            <Col>
              <InputForm
                name="학교"
                value={this.state.student.school}
                onChange={(e) => this._handleStudentEdit("school", e.target.value)}/>
            </Col>
            <Col>
              <InputForm
                name="학년"
                placeholder="예) 중1, 고2"
                value={this.state.student.grade}
                onChange={(e) => this._handleStudentEdit("grade", e.target.value)}/>
            </Col>
          </Row2>
          <Row2>
            <Col>
              <InputForm
                name="학생 번호"
                value={this.state.student.tel}
                onChange={(e) => this._handleStudentEdit("tel", e.target.value)}/>
            </Col>
            <Col>
              <InputForm
                name="부모 번호"
                value={this.state.student.ptel}
                onChange={(e) => this._handleStudentEdit("ptel", e.target.value)}/>
            </Col>
          </Row2>
          <Row2>
            <Col><InputForm name="등록일" placeholder="예) 2018-07-08"/></Col>
          </Row2>
        </Modal>
      </CommonLayout>
    )
  }
}

const mapStateToProps = (state) => ({
});
const mapDispatchToProps = (dispatch) => ({
});

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
const Container = styled.div`
  color: ${props => props.theme._components.gray}
  float: left;
  margin-left: 20px;
`
const Row = styled.div`
  height: 30px;
  line-height: 30px;
`
const Row2 = styled.div`
  margin-bottom: 10px;
  display: flex;
`
const Col = styled.div`
  flex: 1;
`
const SubTitle = styled.div`
  font-weight: bold;
  height: 30px;
  line-height: 30px;
  margin-bottom: 10px;
  padding: 0px 10px;
  margin: 5px 0px;
  border-left: 3px solid ${props => props.theme._components.gray}
`