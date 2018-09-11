import React from 'react';
import styled from 'styled-components';

const Pagination = (props) => {
  return (
    <Container>
      <BtnContainer>
        <Btn>&lt;</Btn>
        <Btn>1</Btn>
        <Btn>2</Btn>
        <Btn>3</Btn>
        <Btn>4</Btn>
        <Btn>5</Btn>
        <Btn>&gt;</Btn>
      </BtnContainer>
    </Container>
  )
}

export default Pagination;

const Container = styled.div`
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  background-color: #f0f0f0;
  border-radius: 0px 0px 5px 5px;
  text-align: center;
`
const BtnContainer = styled.div`
  float: right;
`
const Btn = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 5px;
  display: inline-block;
`