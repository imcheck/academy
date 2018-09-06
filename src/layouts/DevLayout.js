import React from 'react';
import styled from 'styled-components';

import { Input, _Input } from '@components';
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
  render() {
    return (
      <Container>
        <Title>Input</Title>
        <Input />
        <_Input />
      </Container>
    );
  }
}
export default ErrorHOC(DevLayout);
