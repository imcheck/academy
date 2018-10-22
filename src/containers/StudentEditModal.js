import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ErrorHOC from '@hoc';
import { Student } from '@models';
// import { upsertStudent } from '@redux/actions/userActions';
import { getClasses } from "@redux/actions/classActions";
import { Modal, Button, InputForm, Table } from '@components';
import MiniClassSelectModal from '@containers/MiniClassSelectModal';
import MiniStudentSelectModal from '@containers/MiniStudentSelectModal';

class StudentEditModal extends React.Component {
  state = {
    miniClassModalVisible: false,
    miniStudentModalVisible: false
  }
  _handleStudentEdit = (key, value) => {
    const { student } = this.state;
    student[key] = value;
    this.setState(state => ({
      student
    }));
  }
  _handleSaveClick = () => {
    const { student } = this.state;
    const params = { student };
    // this.props.upsertStudent(params);
  }
  _handleClassSelectModal = (type) => {
    if (type === "open") {
      this.props.getClasses(this.props.user);
      this.setState(state => ({ miniClassModalVisible: true}));
    } else {
      this.setState(state => ({ miniClassModalVisible: false}));
    }
  }
  _handleClassSelect = (classes) => {
    this._handleStudentEdit("classes", classes);
    this._handleClassSelectModal("close");
  }
  _handleStudentSelectModal = (type) => {
    if (type === "open") {
      this.setState(state => ({ miniStudentModalVisible: true}));
    } else {
      this.setState(state => ({ miniStudentModalVisible: false}));
    }
  }
  _handleStudentSelect = (students) => {
    this._handleStudentEdit("students", students);
    this._handleStudentSelectModal("close");
  }
  render() {
    const { disabled } = this.props;
    const buttons = [];
    if(!disabled) buttons.push(<Button key="save" onClick={this._handleSaveClick} positive>저장</Button>);
    else buttons.push(<Button key="edit" onClick={() => this.props.onChangeDisabled(false)} positive>수정</Button>);
    buttons.push(<Button key="close" onClick={this.props.onClose} negative>취소</Button>);
    return (
      <React.Fragment>
        <Modal
          title="학생 추가"
          visible={this.props.visible}
          width={800}
          height={600}
          footer={buttons}>
          <Wrapper>
            <SubTitle>개인 정보</SubTitle>
          </Wrapper>
          <Row2>
            <Col>
              <InputForm
                disabled={disabled}
                name="이름"
                value={this.state.student.name}
                onChange={(e) => this._handleStudentEdit("name", e.target.value)}/>
            </Col>
          </Row2>
          <Row2>
            <Col>
              <InputForm
                disabled={disabled}
                name="학교"
                value={this.state.student.school}
                onChange={(e) => this._handleStudentEdit("school", e.target.value)}/>
            </Col>
            <Col>
              <InputForm
                disabled={disabled}
                name="학년"
                placeholder="예) 중1, 고2"
                value={this.state.student.grade}
                onChange={(e) => this._handleStudentEdit("grade", e.target.value)}/>
            </Col>
          </Row2>
          <Row2>
            <Col>
              <InputForm
                disabled={disabled}
                name="학생 번호"
                value={this.state.student.phoneNumber}
                onChange={(e) => this._handleStudentEdit("phoneNumber", e.target.value)}/>
            </Col>
            <Col>
              <InputForm
                disabled={disabled}
                name="부모 번호"
                value={this.state.student.parentPhoneNumber}
                onChange={(e) => this._handleStudentEdit("parentPhoneNumber", e.target.value)}/>
            </Col>
          </Row2>
          <Row2>
            <Col>
              <InputForm
                disabled={disabled}
                name="등록일"
                placeholder="예) 2018-07-08"
                value={this.state.student.rdate}
                onChange={(e) => this._handleStudentEdit("rdate", e.target.value)}/>
            </Col>
          </Row2>
          <Wrapper>
            <SubTitle>가족 관계</SubTitle>
            {!disabled ? (
              <FloatRight><Button onClick={() => this._handleStudentSelectModal("open")} height="30px" positive>+ 추가</Button></FloatRight>
              ) : null }
          </Wrapper>
          <Table
            data={this.state.student.students.toJS()}
            columns={[
              {
                header: "이름",
                component: ({ rowData }) => <span>{rowData.name}</span>
              },
              {
                header: "학교",
                component: ({ rowData }) => <span>{rowData.school}</span>
              },
              {
                header: "학년",
                component: ({ rowData }) => <span>{rowData.grade}</span>
              },
              {
                header: "상태",
                component: ({ rowData }) => <span>{rowData.state}</span>
              },
            ]}/>
          <Wrapper>
            <SubTitle>클래스</SubTitle>
            {!disabled ? ( <FloatRight><Button onClick={() => this._handleClassSelectModal("open")} height="30px" positive>+ 추가</Button></FloatRight>
              ) : null }
          </Wrapper>
          <Table
            data={this.state.student.classes.toJS()}
            columns={[
              {
                header: "클래스",
                component: ({ rowData }) => <span>{rowData.name}</span>
              },
              {
                header: "선생님",
                component: ({ rowData }) => <span>{rowData.teacher}</span>
              },
              {
                header: "수업 시간",
                component: ({ rowData }) =>
                  <span>{rowData.times[0].day} ( {rowData.times[0].stime} ~ {rowData.times[0].etime} )</span>
              }
            ]}/>
        </Modal>
        <MiniClassSelectModal
          visible={this.state.miniClassModalVisible}
          onSelectClick={this._handleClassSelect}
          onClose={() => this._handleClassSelectModal("close")} />
        <MiniStudentSelectModal
          visible={this.state.miniStudentModalVisible}
          onSelectClick={this._handleStudentSelect}
          onClose={() => this._handleStudentSelectModal("close")} />
      </React.Fragment>
    )
  }

  static getDerivedStateFromProps(props, state) {
    return { ...props };
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});
const mapDispatchToProps = (dispatch) => ({
  getClasses: (teacher) => dispatch(getClasses(teacher))
});

export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(StudentEditModal));


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
  padding: 0px 10px;
  float: left;
  border-left: 3px solid ${props => props.theme._components.gray}
`
const Wrapper = styled.div`
  height: 30px;
  margin-bottom: 10px;
`
const FloatRight = styled.div`
  float: right;
`
