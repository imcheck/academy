import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ErrorHOC from '@hoc';
import { Students } from '@models';
import { Modal, Button, Table, Input } from '@components';

class MiniTeacherSelectModal extends React.Component {
  state = {
    searchText: "",
    teacherIds: []
  }
  _handleSearchTextChange = (e) => {
    const { value } = e.target;
    this.setState(state => ({
      searchText: value
    }));
  }
  _handleCheck = (v, _studentId) => {
    const { teacherIds } = this.state;
    if(v) {
      teacherIds.push(_studentId);
    } else {
      const index = this.state.teacherIds.findIndex( studentId => {
        if(studentId === _studentId) return true;
        return false;
      });
      teacherIds.splice(index, 1);
    }
    this.setState(state => ({
      teacherIds
    }));
  }
  _handleFinishSelect = () => {
    const students = this.state.teacherIds.map(studentId => this.props.students.getById(studentId));
    this.props.onSelectClick(new Students(students));
  }
  render() {
    const { searchText } = this.state;
    const filter = (teacher) => {
      return teacher.name.includes(searchText) || teacher.grade.includes(searchText) || teacher.school.includes(searchText);
    }
    const teachers = this.props.teachers.toJS().filter(filter);
    return (
      <Modal
        title="강사 선택"
        visible={this.props.visible}
        width={600}
        height={400}
        footer={[<Button key="select" onClick={this._handleFinishSelect} positive>선택</Button>, <Button key="close" onClick={this.props.onClose} negative>취소</Button>]}>
        <Wrapper><SubTitle>선택 가능한 강사</SubTitle></Wrapper>
        {this.state.teacherIds.length ? <Result>선택된 개수: {this.state.teacherIds.length}</Result> : null}
        <Input placeholder="검색" value={this.state.searchText} onChange={this._handleSearchTextChange}/>
        <Table
          data={teachers}
          columns={[
            {
              header: "",
              width: "40px",
              component: ({rowData}) => <input type="checkbox" checked={this.state.teacherIds.indexOf(rowData.teacherId) >= 0} onChange={(e) => this._handleCheck(e.target.checked, rowData.teacherId)}/>
            },
            {
              header: "강사",
              component: ({rowData}) => <span>{rowData.name}</span>
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
        teacherIds: []
      }
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => ({
  teachers: state.page.teacher.teachers
});
const mapDispatchToProps = (dispatch) => ({});

export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(MiniTeacherSelectModal));

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