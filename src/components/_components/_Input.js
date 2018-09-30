// import React from 'react';
import styled, { css } from 'styled-components';

export const _Input = styled.input`
  height: 36px;
  width: 100%;
  font-size: 20px;
  outline: none;
  box-sizing: border-box;
  padding: 0px 10px;
  border: none;
  border-bottom: 2px solid black;
  color: black;
  font-family: inherit;
  ${props => !props.disabled && css`
    &:hover {
      border-bottom: 2px solid #76a5f2;
    }  
  `}
  &:focus {
    border-bottom: 2px solid #4286f4;
  }
`
