import React from 'react';
import styled from 'styled-components';

import {
  Input,
  _Input,
  InputForm,
  File,
  Table,
  Button,
  Notification } from '@components';

  import ErrorHOC from '@hoc';

class DevLayout extends React.Component {
  state = {
    file: ""
  }
  _handleChange = (file) => {
    this.setState(() => ({ file }), () => {
      console.log("after", this.state.file);
    })
  }
  _handleMoreClick = () => {
    // alert("More Button Clicked");
    return true;
  }
  _handleBtnClick = () => {
    Notification.open({
      message: "Hello World!"
    });
  }
  render() {
    const data = [];
    for(let i=1; i<=100; i++){
      data.push({
        attr1: "row"+i,
      })
    }
    return (
      <Container>
        <Title>INPUT</Title>
        <Input />
        <_Input />
        <InputForm name="InputForm"/>
        <File onChange={this._handleChange} file={this.state.file}/>
        <Title>Notification</Title>
        <Button onClick={this._handleBtnClick}>Notification</Button>
        <Title>Table</Title>
        <Table
          // paginationStyle={{type: "more", onMoreClick: this._handleMoreClick}}
          paginationStyle={{type: "pagination"}}
          data={data}
          columns={[
            {
              header: "Attr1",
              component: ({ rowData, row, col }) => <div>({row}, {col}) {rowData.attr1}</div>
            },
            {
              header: "Attr2",
              component: ({ rowData, row, col }) => <div>({row}, {col})</div>
            },
            {
              header: "Attr3",
              component: ({ rowData, row, col }) => <div>({row}, {col})</div>
            },
            {
              header: "Attr4",
              component: ({ rowData, row, col }) => <div>({row}, {col})</div>
            },
            {
              header: "Attr5",
              component: ({ rowData, row, col }) => <div>({row}, {col})</div>
            },
            {
              header: "Attr6",
              component: ({ rowData, row, col }) => <div>({row}, {col})</div>
            }
          ]} />
      </Container>
    );
  }
}
export default ErrorHOC(DevLayout);



const Container = styled.div`
  padding: 10px;
  & > * {
    margin: 10px 0px;
  }
`
const Title = styled.div`
  font-size: 32px;
  color: black;
  font-weight: bold;
  border-bottom: 2px solid black;
`
