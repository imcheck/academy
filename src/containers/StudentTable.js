import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ErrorHOC from '@hoc';
import { Table, Button, Modal } from '@components';

class StudentTable extends React.Component {
  state = {
    visible: false
  }
  _handleDetailModal = (type) => {
    if(type === "open") {
      this.setState(state => ({ visible: true }));
    } else {
      this.setState(state => ({ visible: false }));
    }
  }
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
            },
            {
              header: "#",
              component: ({rowData}) => <Button onClick={() => this._handleDetailModal("open")} height="30px" width="50px" primary>상세</Button>
            }
          ]}
        />
        <Modal
          title="학생 등록"
          visible={this.state.visible}
          width={500}
          height={600}
          footer={[<Button>등록</Button>, <Button onClick={() => this._handleDetailModal("close")}>닫기</Button>]}>
          hi
        </Modal>
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