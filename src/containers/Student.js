import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

import ErrorHOC from '@hoc';
import StudentTable from '@containers/StudentTable';
import CommonLayout from '@layouts/CommonLayout';
import Filter from '@containers/TableFilter';
import { Button, Modal, InputForm, Table } from '@components';
import { Student } from '@models';

class _Student extends React.Component {
  state = {
    student: new Student(),
    studentModalVisible: false
  }
  _handleStudentModal = (type) => {
    if(type === "open") {
      this.setState(state => ({
        student: new Student(),
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
    }));
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
            <Col>
              <InputForm
                name="등록일"
                placeholder="예) 2018-07-08"
                value={this.state.student.rdate}
                onChange={(e) => this._handleStudentEdit("rdate", e.target.value)}/>
            </Col>
          </Row2>
          <SubTitle>가족 관계</SubTitle>
          <Table
            data={[{ name: "Alice", school: "화명중", grade: "중1", state: "재원"}, { name: "Lily", school: "용수중", grade: "초6", state: "휴원"}]}
            columns={[
              {
                header: "이름",
                component: ({rowData}) => <span>{rowData.name}</span>
              },
              {
                header: "학교",
                component: ({rowData}) => <span>{rowData.school}</span>
              },
              {
                header: "학년",
                component: ({rowData}) => <span>{rowData.grade}</span>
              },
              {
                header: "상태",
                component: ({rowData}) => <span>{rowData.state}</span>
              },
            ]}/>
          <SubTitle>클래스</SubTitle>
          <Table
            data={[{ name: "중1-1 심화반", teacher: "Matthew", pdate: [{ day: "월", stime: "13:00", etime: "16:00" }], state: "재원"}, { name: "중2-1 선행반", teacher: "July", pdate: [{ day: "월", stime: "13:00", etime: "16:00" }], state: "휴원"}]}
            columns={[
              {
                header: "클래스",
                component: ({rowData}) => <span>{rowData.name}</span>
              },
              {
                header: "선생님",
                component: ({rowData}) => <span>{rowData.teacher}</span>
              },
              {
                header: "수업 시간",
                component: ({rowData}) => <span>{rowData.pdate[0].day} ( {rowData.pdate[0].stime} ~ {rowData.pdate[0].etime} )</span>
              }
            ]}/>
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