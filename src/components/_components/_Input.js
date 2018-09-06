// import React from 'react';
import styled from 'styled-components';

const _Input = styled.input`
  height: 36px;
  width: 100%;
  font-size: 20px;
  outline: none;
  box-sizing: border-box;
  padding: 0px 10px;
  border: none;
  border-bottom: 2px solid black;
  color: black;
  &:hover {
    border-bottom: 2px solid #76a5f2;
  }
  &:focus {
    border-bottom: 2px solid #4286f4;
  }
`
export default _Input;
