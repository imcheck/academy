import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ErrorHOC from '@hoc';
import { Classes } from '@models';
import { Modal, Button, Table, Input } from '@components';

class MiniClassSelectModal extends React.Component {
  state = {
    searchText: "",
    classIds: []
  }
  _handleSearchTextChange = (e) => {
    const { value } = e.target;
    this.setState(state => ({
      searchText: value
    }));
  }
  _handleCheck = (v, _classId) => {
    const { classIds } = this.state;
    if(v) {
      classIds.push(_classId);
    } else {
      const index = this.state.classIds.findIndex( classId => {
        if(classId === _classId) return true;
        return false;
      });
      classIds.splice(index, 1);
    }
    this.setState(state => ({
      classIds
    }));
  }
  _handleFinishSelect = () => {
    const classes = this.state.classIds.map(classId => this.props.classes.getById(classId));
    console.log(classes);
    this.props.onSelectClick(new Classes(classes));
  }
  render() {
    const classes = this.props.classes.toJS().filter(_class => _class.name.includes(this.state.searchText) || _class.teacher.includes(this.state.searchText));
    return (
      <Modal
        title="클래스 선택"
        visible={this.props.visible}
        width={600}
        height={400}
        footer={[<Button key="select" onClick={this._handleFinishSelect} positive>선택</Button>, <Button key="close" onClick={this.props.onClose} negative>취소</Button>]}>
        <Wrapper><SubTitle>선택 가능한 클래스</SubTitle></Wrapper>
        {this.state.classIds.length ? <Result>선택된 개수: {this.state.classIds.length}</Result> : null}
        <Input placeholder="검색" value={this.state.searchText} onChange={this._handleSearchTextChange}/>
        <Table
          data={classes}
          columns={[
            {
              header: "",
              width: "40px",
              component: ({rowData}) => <input type="checkbox" checked={this.state.classIds.indexOf(rowData.classId) >= 0} onChange={(e) => this._handleCheck(e.target.checked, rowData.classId)}/>
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
  static getDerivedStateFromProps(props) {
    if(!props.visible) {
      return {
        searchText: "",
        classIds: []
      }
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => ({
  classes: state.user.classes
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

const Result = styled.div`
  color: ${props => props.theme._components.blue}
  font-size: 12px;
  margin-bottom: 10px;
`