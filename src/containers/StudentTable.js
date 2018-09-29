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
          data={this.props.data.toJS()}
          columns={[
            {
              header: "이름",
              component: ({rowData}) => <span>{rowData.name}</span>
            },
            {
              header: "학년",
              component: ({rowData}) => <span>{rowData.grade}</span>
            },
            {
              header: "학교",
              component: ({rowData}) => <span>{rowData.school}</span>
            },
            {
              header: "학생 번호",
              component: ({rowData}) => <span>{rowData.tel}</span>
            },
            {
              header: "부모 번호",
              component: ({rowData}) => <span>{rowData.tel2}</span>
            }
          ]}
        />
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.page.student.data
});

const mapDispatchToProps = (dispatch) => ({

});

export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(StudentTable));

const Container = styled.div`
`