import React from 'react';
import styled from 'styled-components';

export const SearchInput = (props) => {
  const NewSearchInput = React.cloneElement(<Input />, props);
  return (
    <Container>
      {NewSearchInput}
      <Button onClick={props.onSearchClick}>
        Search
      </Button>
    </Container>
  )
}


const Container = styled.div`
  display: flex;
`

const Input = styled.input`
  height: 36px;
  flex: 1;
  font-size: 20px;
  outline: none;
  box-sizing: border-box;
  padding: 0px 10px;
  border: 1px solid black;
  border-right: none;
  color: ${props => props.theme._components.black}
  &:hover {
    border: 1px solid ${props => props.theme._components.blue};
    border-right: none;
  }
  &:focus {
    border: 1px solid ${props => props.theme._components.blue};
    border-right: none;
  }
`

const Button = styled.div`
  pointer: cursor;
  background-color: ${props => props.theme._components.blue}
  width: 72px;
  height: 36px;
  line-height: 36px;
  color: white;
  text-align: center;
`