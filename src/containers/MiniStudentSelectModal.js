import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ErrorHOC from '@hoc';
import { Students } from '@models';
import { Modal, Button, Table, Input } from '@components';

class MiniStudentSelectModal extends React.Component {
  state = {
    searchText: "",
    studentIds: []
  }
  _handleSearchTextChange = (e) => {
    const { value } = e.target;
    this.setState(state => ({
      searchText: value
    }));
  }
  _handleCheck = (v, _studentId) => {
    const { studentIds } = this.state;
    if(v) {
      studentIds.push(_studentId);
    } else {
      const index = this.state.studentIds.findIndex( studentId => {
        if(studentId === _studentId) return true;
        return false;
      });
      studentIds.splice(index, 1);
    }
    this.setState(state => ({
      studentIds
    }));
  }
  _handleFinishSelect = () => {
    const students = this.state.studentIds.map(studentId => this.props.students.getById(studentId));
    this.props.onSelectClick(new Students(students));
  }
  render() {
    const { searchText } = this.state;
    const filter = (student) => {
      return student.name.includes(searchText) || student.grade.includes(searchText) || student.school.includes(searchText);
    }
    const students = this.props.students.toJS().filter(filter);
    return (
      <Modal
        title="학생 선택"
        visible={this.props.visible}
        width={600}
        height={400}
        footer={[<Button key="select" onClick={this._handleFinishSelect}>선택</Button>, <Button key="close" onClick={this.props.onClose}>닫기</Button>]}>
        <Wrapper><SubTitle>선택 가능한 학생</SubTitle></Wrapper>
        {this.state.studentIds.length ? <Result>선택된 개수: {this.state.studentIds.length}</Result> : null}
        <Input placeholder="검색" value={this.state.searchText} onChange={this._handleSearchTextChange}/>
        <Table
          data={students}
          columns={[
            {
              header: "",
              width: "40px",
              component: ({rowData}) => <input type="checkbox" checked={this.state.studentIds.indexOf(rowData.studentId) >= 0} onChange={(e) => this._handleCheck(e.target.checked, rowData.studentId)}/>
            },
            {
              header: "학생",
              component: ({rowData}) => <span>{rowData.name}</span>
            },
            {
              header: "학교",
              component: ({rowData}) => <span>{rowData.school}</span>
            },
            {
              header: "학년",
              component: ({rowData}) => <span>{rowData.grade}</span>
            }
          ]}
        />
      </Modal>
    )
  }
  static getDerivedStateFromProps(props) {
    if(!props.visible) {
      return {
        searchText: "",
        studentIds: []
      }
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => ({
  students: state.user.students
});
const mapDispatchToProps = (dispatch) => ({});

export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(MiniStudentSelectModal));

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

const Result = styled.div`
  color: ${props => props.theme._components.blue}
  font-size: 12px;
  margin-bottom: 10px;
`