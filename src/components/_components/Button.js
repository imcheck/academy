import styled from 'styled-components';

export const Button = styled.div`
  display: inline-block;
  width: ${props => props.width ? props.width : "100px"};
  height: ${props => props.height ? props.height: "40px"};
  line-height: ${props => props.height ? props.height: "40px"};
  text-align: center;
  border-radius: 5px;
  background-color: ${props => props.primary? props.theme._components.blue : props.theme._components.green};
  color: white;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.primary? props.theme._components.blue2 : props.theme._components.green2};
    box-shadow: 0px 5px 1px ${props => props.primary ? props.theme._components.blue :props.theme._components.green}
  }
  box-shadow: 0px 5px 1px ${props => props.primary ? props.theme._components.blue3 :props.theme._components.green3}
`
