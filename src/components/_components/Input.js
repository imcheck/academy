// import React from 'react';
import styled from 'styled-components';

export const Input = styled.input`
  height: 36px;
  width: 100%;
  font-size: 20px;
  outline: none;
  box-sizing: border-box;
  padding: 0px 10px;
  border: 1px solid black;
  color: ${props => props.theme._components.black}
  &:hover {
    border: 1px solid ${props => props.theme._components.blue};
  }
  &:focus {
    border: 1px solid blue;
  }
`
