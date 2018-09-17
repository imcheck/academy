import React from 'react';
import styled from 'styled-components';

const Pagination = ({ pageNumbers, onClick, page }) => {
  return (
    <Container>
      <BtnContainer>
        <Btn>&lt;</Btn>
        {pageNumbers.map((no, index) => (
          <Btn
            key={index}
            clicked={page == no}
            onClick={() => onClick(no)}>{no}</Btn>
        ))}
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
  border-radius: 0px 0px 5px 5px;
  text-align: center;
`
const BtnContainer = styled.div`
  float: right;
`
const Btn = styled.div`
  width: 40px;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  cursor: pointer;
  border: 1px solid #e8e8e8;
  border-right: none;
  background-color: ${props => props.clicked ? "#4286f4": "none"};
  color: ${props => props.clicked ? "white": "#4286f4"};
  &:first-child {
    border-radius: 3px 0px 0px 3px;
  }
  &:last-child {
    border: 1px solid #e8e8e8;
    border-radius: 0px 3px 3px 0px;
  }
  box-sizing: border-box;
  &:hover {
    background-color: #68a2ff;
    color: white;
  }
`