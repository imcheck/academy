import React from 'react';
import styled from 'styled-components';

import {
  Input,
  _Input,
  SearchForm,
  SearchFilter,
  InputForm,
  File,
  Table,
  Button,
  Notification,
  Modal
} from '@components';

import ErrorHOC from '@hoc';

class DevLayout extends React.Component {
  state = {
    file: "",
    visible: false // for Modal
  }
  _handleChange = (file) => {
    this.setState(() => ({ file }));
  }

  _handleMoreClick = () => {
    // alert("More Button Clicked");
    return true;
  }
  cnt = 1;
  _handleBtnClick = () => {
    Notification.open({
      message: "Hello World!" + this.cnt
    });
    this.cnt++;
  }
  _handleModal = () => {
    this.setState(state => ({
      visible: true
    }))
  }

  render() {
    const data = [];
    for (let i = 1; i <= 100; i++) {
      data.push({
        attr1: "row" + i,
      })
    }
    return (
      <Container>
        <Title>INPUT</Title>
        <Input/>
        <_Input/>
        <SearchForm/>
        <SearchFilter
          options={[{ value: "name", text: "이름" }, { value: "age", text: "나이" }]}
          optionValue="age"
          onOptionChange={(e) => alert(e.target.value)}
          onSearchClick={() => alert("Search!!")}/>
        <InputForm name="InputForm"></InputForm>
        <File onChange={this._handleChange} file={this.state.file}/>
        <Title>Button</Title>
        <Button primary>Primary</Button>
        <Button>Normal</Button>
        <Title>Notification</Title>
        <Button onClick={this._handleBtnClick}>Notification</Button>
        <Title>Modal</Title>
        <Button onClick={this._handleModal}>Open</Button>
        <Modal
          title="Modal"
          width={600}
          height={400}
          footer={[<Button>저장</Button>, <Button>닫기</Button>]}
          visible={this.state.visible}>
        </Modal>
        <Title>Table</Title>
        <Table
          // paginationStyle={{type: "more", onMoreClick: this._handleMoreClick}}
          paginationStyle={{ type: "pagination", position: "top" }}
          data={data}
          columns={[
            {
              header: "Attr1",
              width: "200px",
              component: ({ rowData, row, col }) =>
                <div>({row}, {col}) {rowData.attr1} sdfjisdjifjasdfasdfasdassidfasdfsdf</div>
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
          ]}/>
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
