import React from 'react';
import styled from 'styled-components';
import { Option, Select } from '@components';

const PageSize = ({value, onChange}) => {
  return (
    <Container>
      <Select value={value} onChange={(e) => onChange(parseInt(e.target.value))}>
        <Option value={10}>10</Option>
        <Option value={20}>20</Option>
        <Option value={50}>50</Option>
        <Option value={100}>100</Option>
      </Select>
    </Container>
  )
}

export default PageSize;

const Container = styled.div`
  float: left;
`;