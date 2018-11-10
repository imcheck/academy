import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ErrorHOC from '@hoc';
import { Table } from '@components';
import Filter from '@components/TableFilter';
import { getLectures } from "@redux/actions/lectureActions";

class LectureTable extends React.Component {
  state = {
    filter: {
      optionValue: "",
      searchText: ""
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

  _filter = (_class) => {
    const { optionValue, searchText } = this.state.filter;
    if (optionValue) {
      return _class[optionValue].includes(searchText);
    } else {
      return _class.name.includes(searchText) || _class.teachers.getTeachers().includes(searchText);
    }
  }
  _handleModal = (type, _class) => {
    // if (type === "open") {
    //   this.setState(state => ({ visible: true, class: _class}));
    // } else {
    //   this.setState(state => ({ visible: false }));
    // }
  }
  _handleAttendModal = (type) => {

  }
  render() {
    const filterOptions = [
      { value: "", text: "전체" },
      { value: "name", text: "수업명" },
      { value: "teacher", text: "강사" }
    ]
    const data = this.props.data.lectures.filter(this._filter);
    return (
      <Container>
        <Filter filterOptions={filterOptions} onSearch={this._handleSearch}/>
        <Table
          data={data}
          columns={[
            {
              header: "수업",
              component: ({ rowData }) => <span>{rowData.name}</span>
            },
            {
              header: "수업 시간",
              component: ({ rowData }) => (
                <span>
                  {rowData.times.map((time, id) => {
                    return <span key={id}>{time.day + "(" + time.stime + " ~ " + time.etime + ")"} </span>
                  })}
                </span>
              )
            },
            {
              header: "선생님",
              component: ({ rowData }) => <span>{rowData.teachers.getTeachers()}</span>
            },
            {
              header: "#",
              width: "140px",
              component: ({ rowData }) => (
                <React.Fragment>
                  <BorderBtn onClick={() => this._handleModal("open", rowData)}>상세</BorderBtn>
                  <AttendBtn onClick={() => this._handleAttendModal("open")}>출석</AttendBtn>
                </React.Fragment>
              )
            }
          ]}
        />
      </Container>
    )
  }

  componentDidMount() {
    this.props.getLectures();
  }
}

const mapStateToProps = (state) => ({
  data: state.page.lecture.lectures
});

const mapDispatchToProps = (dispatch) => ({
  getLectures: () => dispatch(getLectures())

});

export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(LectureTable));

const Container = styled.div`
`
const BorderBtn = styled.div`
  width: 60px;
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
  margin-right: 10px;
`
const AttendBtn = styled.div`
  width: 60px;
  height: 30px;
  line-height: 30px;
  margin-top: 5px;
  border: 1px solid ${props => props.theme._components.green};
  color: ${props => props.theme._components.green};
  border-radius: 3px;
  display: inline-block;
  &:hover {
    color: ${props => props.theme._components.green2};
    border: 1px solid ${props => props.theme._components.green2};
  }
  cursor: pointer;
`
