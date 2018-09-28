import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ErrorHOC from '@hoc';
import { Table } from '@components';

class StudentTable extends React.Component {
  render() {
    return (
      <Container>
        <Table
          data={this.props.data}
          columns={[
            {
              header: "이름",
              component: ({rowData}) => <span>{rowData.name}</span>
            },
            {
              header: "학년",
              component: ({rowData}) => <span>{rowData.birth}</span>
            }
          ]}
        />
      </Container>
    )
  }
  componentDidMount() {

  }
}

const mapStateToProps = (state) => ({
  data: state.page.student.tableData
});

const mapDispatchToProps = (dispatch) => ({

});

export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(StudentTable));

const Container = styled.div`
`