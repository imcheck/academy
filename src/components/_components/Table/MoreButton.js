import React from 'react';
import styled from 'styled-components';

const MoreButton = (props) => {
  return <Container onClick={props.onClick}>More +</Container>
}

export default MoreButton;

const Container = styled.div`
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  background-color: #71a1ed;
  color: white;
  border-radius: 0px 0px 5px 5px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #4286f4;
  }
` 
