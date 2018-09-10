import styled from 'styled-components';
import { _Input } from '@components';
import React from 'react';

const Container = styled.div`
  display: flex;
`
const Name = styled.div`
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
export const InputForm = ({name, value, placeholder, onChange}) => {
  return (
    <Container>
      <Name>{name}</Name>
      <InputContainer>
        <_Input
          value={value}
          onChange={onChange}
          placeholder={placeholder}/>
      </InputContainer>
    </Container>
  )
}
