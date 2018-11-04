import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Modal, Button, InputForm, Table } from '@components';

class LectureEditModal extends React.Component {
  state = {}
  _handleClassEdit = (key, value) => {
  }

  render() {
    const buttons = [];
    if(disabled) buttons.push(<Button key="edit" positive>수정</Button>);
    else buttons.push(<Button key="save" positive>저장</Button>);
    buttons.push(<Button key="cancel" negative>취소</Button>);
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
              value={this.state.class.name}
              onChange={(e) => this._handleClassEdit("name", e.target.value)}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <InputForm
              disabled={disabled}
              name="선생님"
              value={this.state.class.school}
              onChange={(e) => this._handleClassEdit("school", e.target.value)}/>
          </Col>
          <Button height="30px"> + 강사</Button>
        </Row>
        <Row>
          <Col>
            <InputForm
              disabled={disabled}
              name="시작 날짜"
              value={this.state.class.sdate}
              onChange={(e) => this._handleClassEdit("sdate", e.target.value)}/>
          </Col>
          <Col>
            <InputForm
              disabled={disabled}
              name="종료 날짜"
              value={this.state.class.edate}
              onChange={(e) => this._handleClassEdit("edate", e.target.value)}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <InputForm
              disabled={disabled}
              name="수강료"
              value={this.state.class.tuition}
              onChange={(e) => this._handleClassEdit("tuition", e.target.value)}/>
          </Col>
        </Row>
        <Wrapper>
          <SubTitle>학생</SubTitle>
          {!disabled ? (
            <FloatRight><Button height="30px" positive>+
              추가</Button></FloatRight>
          ) : null}
        </Wrapper>
        <Table
          data={this.state.class.students.toJS()}
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
      </Modal>
    )
  }

  static getDerivedStateFromProps(props, state) {
    return { ...props };
  }
}

export default LectureEditModal;

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
