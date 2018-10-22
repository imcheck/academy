import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ErrorHOC from '@hoc';
import { Student } from '@models';
import { upsertStudent } from '@redux/actions/userActions';
import { Modal, Button, InputForm, Table } from '@components';
import MiniClassSelectModal from '@containers/MiniClassSelectModal';

class TeacherEditModal extends React.Component {
  state = {
    miniClassModalVisible: false,
  }
  _handleTeacherEdit = (key, value) => {
    const { teacher } = this.state;
    teacher[key] = value;
    this.setState(state => ({
      teacher
    }));
  }
  _handleSaveClick = () => {
    const { teacher } = this.state;
    const params = { teacher };
    console.log(teacher);
    // this.props.upsertStudent(params);
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
          title="강사 추가"
          visible={this.props.visible}
          width={800}
          height={600}
          footer={buttons}>
          <Wrapper>
            <SubTitle>강사 정보</SubTitle>
          </Wrapper>
          <Row2>
            <Col>
              <InputForm
                disabled={disabled}
                name="이메일"
                value={this.state.teacher.email}
                onChange={(e) => this._handleTeacherEdit("email", e.target.value)}/>
            </Col>
          </Row2>
          <Row2>
            <Col>
              <InputForm
                disabled={disabled}
                name="이름"
                value={this.state.teacher.name}
                onChange={(e) => this._handleTeacherEdit("name", e.target.value)}/>
            </Col>
          </Row2>
          <Row2>
            <Col>
              <InputForm
                disabled={disabled}
                name="강사 번호"
                value={this.state.teacher.phoneNumber}
                onChange={(e) => this._handleTeacherEdit("phoneNumber", e.target.value)}/>
            </Col>
            <Col>
              <InputForm
                disabled={disabled}
                name="강사 번호2"
                value={this.state.teacher.parentPhoneNumber}
                onChange={(e) => this._handleTeacherEdit("parentPhoneNumber", e.target.value)}/>
            </Col>
          </Row2>
          <Row2>
            <Col>
              <InputForm
                disabled={disabled}
                name="상태"
                placeholder="예) 정상"
                value={this.state.teacher.state}
                onChange={(e) => this._handleTeacherEdit("state", e.target.value)}/>
            </Col>
            <Col>
              <InputForm
                disabled={disabled}
                name="등록일"
                placeholder="예) 2018-07-08"
                value={this.state.teacher.rdate}
                onChange={(e) => this._handleTeacherEdit("rdate", e.target.value)}/>
            </Col>
          </Row2>
          <Wrapper>
            <SubTitle>클래스</SubTitle>
            {!disabled ? ( <FloatRight><Button onClick={() => this._handleClassSelectModal("open")} height="30px" positive>+ 추가</Button></FloatRight>
            ) : null }
          </Wrapper>
          <Table
            data={this.state.teacher.classes.toJS()}
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
                  <span>{rowData.pdate[0].day} ( {rowData.pdate[0].stime} ~ {rowData.pdate[0].etime} )</span>
              }
            ]}/>
        </Modal>
        <MiniClassSelectModal
          visible={this.state.miniClassModalVisible}
          onSelectClick={this._handleClassSelect}
          onClose={() => this._handleClassSelectModal("close")} />
      </React.Fragment>
    )
  }

  static getDerivedStateFromProps(props, state) {
    return { ...props };
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  // upsertStudent: (params) => dispatch(upsertStudent(params))
});

export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(TeacherEditModal));


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
