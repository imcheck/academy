import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { Button, InputForm, Modal, Table } from '@components';
import { Lecture } from "@models";
import MiniStudentSelectModal from '@containers/MiniStudentSelectModal';
import MiniTeacherSelectModal from '@containers/MiniTeacherSelectModal';
import { getStudents } from '@redux/actions/studentActions';
import { getTeachers } from '@redux/actions/teacherActions';
import ErrorHOC from "@hoc";

class LectureEditModal extends React.Component {
  state = {
    miniTeacherModalVisible: false,
    miniStudentModalVisible: false
  }
  _handleEditLecture = (key, value) => {
    const { lecture } = this.state;
    lecture[key] = value;
    this.setState(state => ({
      lecture
    }));
  }

  _handleClickSave = () => {
    console.log(this.props.lecture);
  }

  _handleStudentSelectModal = (type) => {
    if (type === "open") {
      this.props.getStudents();
      this.setState(state => ({ miniStudentModalVisible: true }));
    } else {
      this.setState(state => ({ miniStudentModalVisible: false }));
    }
  }
  _handleStudentSelect = (students) => {
    this._handleEditLecture("students", students);
    this._handleStudentSelectModal("close");
  }

  _handleTeacherSelectModal = (type) => {
    if (type === "open") {
      this.props.getTeachers();
      this.setState(state => ({ miniTeacherModalVisible: true }));
    } else {
      this.setState(state => ({ miniTeacherModalVisible: false }));
    }
  }

  _handleTeacherSelect = (teachers) => {

  }
  static getDerivedStateFromProps(props, state) {
    return { ...props };
  }

  render() {
    const buttons = [];
    if (disabled) buttons.push(<Button key="edit" positive>수정</Button>);
    else buttons.push(<Button key="save" onClick={this._handleClickSave} positive>저장</Button>);
    buttons.push(<Button key="cancel" onClick={this.props.onClose} negative>취소</Button>);
    const { disabled } = this.props;
    return (
      <Modal
        title="클래스 추가"
        visible={this.props.visible}
        width={800}
        height={600}
        footer={buttons}>
        <Wrapper>
          <SubTitle>클래스 정보</SubTitle>
        </Wrapper>
        <Row>
          <Col>
            <InputForm
              disabled={disabled}
              name="이름"
              value={this.state.lecture.name}
              onChange={(e) => this._handleEditLecture("name", e.target.value)}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <InputForm
              disabled={true}
              name="선생님"
              value={this.state.lecture.teachers.getTeachers()}/>
          </Col>
          <Button height="30px" onClick={() => this._handleTeacherSelectModal("open")}> + 강사</Button>
        </Row>
        <Row>
          <Col>
            <InputForm
              disabled={disabled}
              name="수업 시간"
              value={this.state.lecture.times.toString()}
              onChange={(e) => this._handleEditLecture("sdate", e.target.value)}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <InputForm
              disabled={disabled}
              name="시작 날짜"
              value={this.state.lecture.sdate}
              onChange={(e) => this._handleEditLecture("sdate", e.target.value)}/>
          </Col>
          <Col>
            <InputForm
              disabled={disabled}
              name="종료 날짜"
              value={this.state.lecture.edate}
              onChange={(e) => this._handleEditLecture("edate", e.target.value)}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <InputForm
              disabled={disabled}
              name="수강료"
              value={this.state.lecture.tuition}
              onChange={(e) => this._handleEditLecture("tuition", e.target.value)}/>
          </Col>
        </Row>
        <Wrapper>
          <SubTitle>학생</SubTitle>
          {!disabled ? (
            <FloatRight>
              <Button onClick={() => this._handleStudentSelectModal("open")} height="30px" positive>
                + 추가
              </Button>
            </FloatRight>
          ) : null}
        </Wrapper>
        <Table
          data={this.state.lecture.students.toJS()}
          headerStyle={{ height: "40px", lineHeight: "40px" }}
          rowStyle={{ height: "50px", lineHeight: "50px" }}
          columns={[
            {
              header: "이름",
              component: ({ rowData }) => <span>{rowData.name}</span>
            },
            {
              header: "학년",
              component: ({ rowData }) => <span>{rowData.grade}</span>
            },
            {
              header: "학교",
              component: ({ rowData }) => <span>{rowData.school}</span>
            }
          ]}/>
        <MiniStudentSelectModal
          visible={this.state.miniStudentModalVisible}
          onSelectClick={this._handleStudentSelect}
          onClose={() => this._handleStudentSelectModal("close")}/>
        <MiniTeacherSelectModal
          visible={this.state.miniTeacherModalVisible}
          onSelectClick={this._handleTeacherSelect}
          onClose={() => this._handleTeacherSelectModal("close")}/>
      </Modal>
    )
  }
}

const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({
  getStudents: () => dispatch(getStudents()),
  getTeachers: () => dispatch(getTeachers())
})
export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(LectureEditModal));

const Container = styled.div``;
const Row = styled.div`
  margin-bottom: 10px;
  display: flex;
`;
const Col = styled.div`
  flex: 1;
`;
const SubTitle = styled.div`
  font-weight: bold;
  height: 30px;
  line-height: 30px;
  padding: 0px 10px;
  float: left;
  border-left: 3px solid ${props => props.theme._components.gray}
`;
const Wrapper = styled.div`
  height: 30px;
  margin-bottom: 10px;
`;
const FloatRight = styled.div`
  float: right;
`
