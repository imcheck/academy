import styled from 'styled-components';

export const Button = styled.div`
  display: inline-block;
  width: ${props => props.width ? props.width : "100px"};
  height: ${props => props.height ? props.height: "40px"};
  line-height: ${props => props.height ? props.height: "40px"};
  text-align: center;
  border-radius: 5px;
  background-color: ${props => props.primary? "#4286f4" : props.theme._components.green};
  color: white;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.primary? "#76a5f2" : props.theme._components.green2};
  }
`
