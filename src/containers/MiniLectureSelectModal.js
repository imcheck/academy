import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ErrorHOC from '@hoc';
import { Lectures } from '@models';
import { Modal, Button, Table, Input } from '@components';

class MiniLectureSelectModal extends React.Component {
  state = {
    searchText: "",
    lectureIds: []
  }
  _handleSearchTextChange = (e) => {
    const { value } = e.target;
    this.setState(state => ({
      searchText: value
    }));
  }
  _handleCheck = (v, _lectureId) => {
    const { lectureIds } = this.state;
    if (v) {
      lectureIds.push(_lectureId);
    } else {
      const index = this.state.lectureIds.findIndex(lectureId => {
        if (lectureId === _lectureId) return true;
        return false;
      });
      lectureIds.splice(index, 1);
    }
    this.setState(state => ({
      lectureIds
    }));
  }
  _handleFinishSelect = () => {
    const lectures = this.state.lectureIds.map(lectureId => this.props.lectures.getById(lectureId));
    this.props.onSelectClick(new Lectures(lectures));
  }
  render() {
    const lectures = this.props.lectures.toJS().filter(lecture => lecture.name.includes(this.state.searchText) || lecture.teachers.map(teacher => teacher.name).join(",").includes(this.state.searchText));
    return (
      <Modal
        title="클래스 선택"
        visible={this.props.visible}
        width={600}
        height={400}
        footer={[<Button key="select" onClick={this._handleFinishSelect} positive>선택</Button>, <Button key="close" onClick={this.props.onClose} negative>취소</Button>]}>
        <Wrapper><SubTitle>선택 가능한 클래스</SubTitle></Wrapper>
        {this.state.lectureIds.length ? <Result>선택된 개수: {this.state.lectureIds.length}</Result> : null}
        <Input placeholder="검색" value={this.state.searchText} onChange={this._handleSearchTextChange} />
        <Table
          rowStyle={{ height: "50px", lineHeight: "50px" }}
          data={lectures}
          columns={[
            {
              header: "",
              width: "40px",
              component: ({ rowData }) => <input type="checkbox" checked={this.state.lectureIds.indexOf(rowData.lectureId) >= 0} onChange={(e) => this._handleCheck(e.target.checked, rowData.lectureId)} />
            },
            {
              header: "클래스",
              component: ({ rowData }) => <span>{rowData.name}</span>
            },
            {
              header: "선생님",
              component: ({ rowData }) => {
                return <span>{rowData.teachers.map(teacher => teacher.name).join(",")}</span>
              }
            },
            {
              header: "수업 시간",
              component: ({ rowData }) => {
                const size = rowData.times.length;
                const height = 50 / size;
                if (size) {
                  return rowData.times.map((time, index) => <div key={index} style={{ lineHeight: height + "px", height: height + "px" }}>{time.day} ( {time.stime} ~ {time.etime} )</div>);
                } else {
                  return null;
                }
              }
            }
          ]}
        />
      </Modal>
    )
  }
  static getDerivedStateFromProps(props) {
    if (!props.visible) {
      return {
        searchText: "",
        lectureIds: []
      }
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => ({
  lectures: state.page.lecture.lectures
});
const mapDispatchToProps = (dispatch) => ({});

export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(MiniLectureSelectModal));

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
