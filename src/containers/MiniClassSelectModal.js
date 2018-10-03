import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ErrorHOC from '@hoc';
import { Modal, Button, Table } from '@components';

class MiniClassSelectModal extends React.Component {
  render() {
    console.log(this.props.classes.toJS());
    return (
      <Modal
        title="클래스 선택"
        visible={this.props.visible}
        width={600}
        height={400}
        footer={[<Button key="select">선택</Button>, <Button key="close" onClick={this.props.onClose}>닫기</Button>]}>
        <Wrapper><SubTitle>선택 가능한 클래스</SubTitle></Wrapper>
        <Table
          data={this.props.classes.toJS()}
          columns={[
            {
              header: "",
              width: "40px",
              component: ({rowData}) => <input type="checkbox" />
            },
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
          ]}
        />
      </Modal>
    )
  }
}

const mapStateToProps = (state) => ({
  classes: state.page.class.data
});
const mapDispatchToProps = (dispatch) => ({});

export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(MiniClassSelectModal));

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
