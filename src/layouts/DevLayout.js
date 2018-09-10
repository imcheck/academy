import React from 'react';
import styled from 'styled-components';

import {
  Input,
  _Input,
  InputForm,
  File } from '@components';
import ErrorHOC from '@hoc';

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
class DevLayout extends React.Component {
  state = {
    file: ""
  }
  _handleChange = (file) => {
    this.setState(() => ({ file }), () => {
      console.log("after", this.state.file);
    })
  }
  render() {
    return (
      <Container>
        <Title>INPUT</Title>
        <Input />
        <_Input />
        <InputForm name="InputForm"/>
        <File onChange={this._handleChange} file={this.state.file}/>
      </Container>
    );
  }
}
export default ErrorHOC(DevLayout);
