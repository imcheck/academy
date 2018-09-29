import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ErrorHOC from '@hoc';
import { Table } from '@components';

class ClassTable extends React.Component {
  render() {
    return (
      <Container>
        <Table
          data={this.props.data.toJS()}
          columns={[
            {
              header: "수업",
              component: ({rowData}) => <span>{rowData.name}</span>
            },
            {
              header: "선생님",
              component: ({rowData}) => <span>{rowData.teacher}</span>
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
  data: state.page.class.data
});

const mapDispatchToProps = (dispatch) => ({

});

export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(ClassTable));

const Container = styled.div`
`