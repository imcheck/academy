import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ErrorHOC from '@hoc';
import { Table, Button, Modal, InputForm } from '@components';

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
              component: ({rowData}) => <span>{rowData.ptel}</span>
            },
            {
              header: "#",
              component: ({rowData}) => <Button onClick={() => this._handleDetailModal("open")} height="30px" width="50px" primary>상세</Button>
            }
          ]}
        />
        <Modal
          title="학생 정보"
          visible={this.state.visible}
          width={800}
          height={600}
          footer={[<Button key="close" onClick={() => this._handleDetailModal("close")}>닫기</Button>]}>
          <Title>개인 정보</Title>
          <Row>
            <Col><InputForm name="이름">imcheck</InputForm></Col>
          </Row>
          <Row>
            <Col><InputForm name="학교">풍무중학교</InputForm></Col>
            <Col><InputForm name="학년">중1</InputForm></Col>
          </Row>
          <Row>
            <Col><InputForm name="학생 번호">010-1234-5678</InputForm></Col>
            <Col><InputForm name="부모 번호">010-5678-1234</InputForm></Col>
          </Row>
          <Row>
            <Col><InputForm name="등록일">2018-03-01</InputForm></Col>
          </Row>
          <Title>가족 관계</Title>
          <Table
            data={[{ name: "Alice", school: "화명중", grade: "중1", state: "재원"}, { name: "Lily", school: "용수중", grade: "초6", state: "휴원"}]}
            columns={[
              {
                header: "이름",
                component: ({rowData}) => <span>{rowData.name}</span>
              },
              {
                header: "학교",
                component: ({rowData}) => <span>{rowData.school}</span>
              },
              {
                header: "학년",
                component: ({rowData}) => <span>{rowData.grade}</span>
              },
              {
                header: "상태",
                component: ({rowData}) => <span>{rowData.state}</span>
              },
            ]}/>
          <Title>클래스</Title>
          <Table
            data={[{ name: "중1-1 심화반", teacher: "Matthew", pdate: [{ day: "월", stime: "13:00", etime: "16:00" }], state: "재원"}, { name: "중2-1 선행반", teacher: "July", pdate: [{ day: "월", stime: "13:00", etime: "16:00" }], state: "휴원"}]}
            columns={[
              {
                header: "클래스",
                component: ({rowData}) => <span>{rowData.name}</span>
              },
              {
                header: "선생님",
                component: ({rowData}) => <span>{rowData.teacher}</span>
              },
              {
                header: "수업 시간",
                component: ({rowData}) => <span>{rowData.pdate[0].day} ( {rowData.pdate[0].stime} ~ {rowData.pdate[0].etime} )</span>
              }
            ]}/>
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

const Row = styled.div`
  margin-bottom: 10px;
  display: flex;
`
const Col = styled.div`
  flex: 1;
`
const Title = styled.div`
  font-weight: bold;
  height: 30px;
  line-height: 30px;
  margin-bottom: 10px;
  padding: 0px 10px;
  margin: 5px 0px;
  border-left: 3px solid ${props => props.theme._components.gray}
`