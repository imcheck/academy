import React from 'react';
import styled from 'styled-components';

import { SearchForm } from './SearchForm';

export const SearchFilter = ({ options, optionValue, onOptionChange, ...props }) => {
  const _options = options.map((option, key) => <Option key={key} value={option.value}>{option.text}</Option>);
  const newSearchForm = React.cloneElement(<SearchForm onKeyUp={(e) => e.keyCode==13 ? props.onSearchClick() : null}/>, props);
  return (
    <Container>
      <SelectContainer><Select value={optionValue} onChange={onOptionChange}>{_options}</Select></SelectContainer>
      <InputContainer>{newSearchForm}</InputContainer>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
`;
const SelectContainer = styled.div`
  width: 150px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  color: white;
  border-radius: 5px 0px 0px 5px;
  background-color: #4286f4;
  margin-right: 5px;
`
const InputContainer = styled.div`
  flex: 1;
`
const Select = styled.select`
  outline: none;
  border: none;
  width: 100%;
  height: calc(100% - 1px);
  background-color: inherit;
  color: white;
  font-size: 15px;
`;
const Option = styled.option``;