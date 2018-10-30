import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ErrorHOC from '@hoc';
import { Table } from '@components';
import Filter from '@components/TableFilter';
import { getClasses } from "@redux/actions/classActions";

class ClassTable extends React.Component {
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

  render() {
    const filterOptions = [
      { value: "", text: "전체" },
      { value: "name", text: "수업명" },
      { value: "teacher", text: "강사" }
    ]
    const data = this.props.data.classes.filter(this._filter);
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
                  {rowData.times.map(time => {
                    return <span>{time.day + "(" + time.stime + " ~ " + time.etime + ")"}</span>
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
              width: "100px",
              component: ({ rowData }) => <BorderBtn onClick={() => this._handleModal("open", rowData)}>상세</BorderBtn>
            }
          ]}
        />
      </Container>
    )
  }

  componentDidMount() {
    this.props.getClasses();
  }
}

const mapStateToProps = (state) => ({
  data: state.page.class.classes
});

const mapDispatchToProps = (dispatch) => ({
  getClasses: () => dispatch(getClasses())

});

export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(ClassTable));

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
