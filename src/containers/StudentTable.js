import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ErrorHOC from '@hoc';
import { Table } from '@components';
import Filter from '@components/TableFilter';
import StudentEditModal from "@containers/StudentEditModal";
import { Student } from "@models";
import { getStudents } from "@redux/actions/studentActions";

class StudentTable extends React.Component {
  state = {
    student: new Student(),
    visible: false,
    filter: {
      optionValue: "",
      searchText: ""
    },
    disabled: true
  }
  _handleModal = async (type, _student) => {
    if (type === "open") {
      const student = await _student.getMoreInfo();
      this.setState(state => ({ visible: true, student: student }));
    } else {
      this.setState(state => ({ visible: false }));
    }
  }
  _handleSearch = ({ optionValue, searchText }) => {
    this.setState(state => ({
      filter: {
        optionValue,
        searchText
      }
    }))
  }
  _filter = (student) => {
    const { optionValue, searchText } = this.state.filter;
    if (optionValue) {
      return student[optionValue].includes(searchText);
    } else {
      return student.name.includes(searchText) || student.school.includes(searchText) || student.phoneNumber.includes(searchText);
    }
  }
  _handleDisabled = (disabled) => {
    this.setState(state => ({ disabled }));
  }
  render() {
    const filterOptions = [
      { value: "", text: "전체" },
      { value: "name", text: "이름" },
      { value: "school", text: "학교" },
      { value: "phoneNumber", text: "전화번호" }
    ];
    const data = this.props.data.students.filter(this._filter);
    return (
      <Container>
        <Filter filterOptions={filterOptions} onSearch={this._handleSearch} />
        <Table
          data={data}
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
            },
            {
              header: "학생 번호",
              component: ({ rowData }) => <span>{rowData.phoneNumber}</span>
            },
            {
              header: "부모 번호",
              component: ({ rowData }) => <span>{rowData.parentPhoneNumber}</span>
            },
            {
              header: "#",
              width: "100px",
              component: ({ rowData }) => <BorderBtn onClick={() => this._handleModal("open", rowData)}>상세</BorderBtn>
            }
          ]}
        />
        <StudentEditModal
          disabled={this.state.disabled}
          onChangeDisabled={this._handleDisabled}
          student={this.state.student}
          visible={this.state.visible}
          onClose={() => this._handleModal("close")} />
      </Container>
    )
  }
  componentDidMount() {
    this.props.getStudents()
  }
}

const mapStateToProps = (state) => ({
  data: state.page.student.students
});

const mapDispatchToProps = (dispatch) => ({
  getStudents: () => dispatch(getStudents())
});

export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(StudentTable));



const Container = styled.div`
`

const BorderBtn = styled.div`
  width: 70px;
  height: 30px;
  line-height: 30px;
  margin-top: 5px;
  border: 1px solid ${props => props.theme._components.blue};
  color: ${props => props.theme._components.blue};
  border-radius: 3px;
  display: inline-block;
  &:hover {
    color: ${props => props.theme._components.blue2};
    border: 1px solid ${props => props.theme._components.blue2};
  }
  cursor: pointer;
`
