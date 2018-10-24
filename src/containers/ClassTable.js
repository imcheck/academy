import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ErrorHOC from '@hoc';
import { Table } from '@components';
import Filter from '@components/TableFilter';

class ClassTable extends React.Component {
  _handleSearch = ({optionValue, searchText }) => {
    console.log(optionValue, searchText);
  }

  render() {
    const filterOptions = [
      { value: "", text: "전체" },
      { value: "name", text: "수업명" },
      { value: "teacher", text: "강사" }
    ]
    return (
      <Container>
        <Filter filterOptions={filterOptions} onSearch={this._handleSearch} />
        <Table
          data={this.props.data.toJS()}
          columns={[
            {
              header: "수업",
              component: ({rowData}) => <span>{rowData.name}</span>
            },
            {
              header: "선생님",
              component: ({rowData}) => <span>{rowData.teachers.getTeachers()}</span>
            },
            {
              header: "시작날짜",
              component: ({rowData}) => <span>{rowData.sdate}</span>
            }
          ]}
        />
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.user.classes
});

const mapDispatchToProps = (dispatch) => ({

});

export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(ClassTable));

const Container = styled.div`
`
