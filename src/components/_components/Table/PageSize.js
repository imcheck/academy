import React from 'react';
import styled from 'styled-components';
import { Select, Option } from '@components';

const PageSize = (props) => {
  return (
    <Container>
      <Select>
        <Option>1</Option>
        <Option>2</Option>
      </Select>
    </Container>
  )
}

export default PageSize;

const Container = styled.div`
  float: left;
`;