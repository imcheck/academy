import React from "react";
import styled from 'styled-components';
import { theme } from "@config/styleConfig";

export const Button = ({primary, positive, negative, ...props}) => {
  const style = {};
  if(primary) {
    style.backgroundColor = theme._components.blue;
    style.boxShadowColor = theme._components.blue3;
    style.borderColor = theme._components.blue2;
    style.color = theme._components.white;
  } else if(positive) {
    style.backgroundColor = theme._components.green;
    style.borderColor = theme._components.green2;
    style.boxShadowColor = theme._components.green3;
    style.color = theme._components.white;
  } else if(negative) {
    style.backgroundColor = theme._components.pink;
    style.boxShadowColor = theme._components.pink2;
    style.borderColor = theme._components.pink3;
    style.color = theme._components.white;
  } else {
    style.backgroundColor = "inherit";
    style.boxShadowColor = theme._components.gray;
    style.borderColor = theme._components.gray2;
    style.color = theme._components.black;
  }
  return React.cloneElement(<_Button colorStyle={style}>{props.children}</_Button>, props);
}

const  _Button = styled.div`
  display: inline-block;
  width: ${props => props.width ? props.width : "100px"};
  height: ${props => props.height ? props.height: "40px"};
  line-height: ${props => props.height ? props.height: "40px"};
  text-align: center;
  border-radius: 5px;
  background-color: ${props => props.colorStyle.backgroundColor};
  color: ${props => props.colorStyle.color};
  cursor: pointer;
  box-shadow: 0px 5px 1px ${props => props.colorStyle.boxShadowColor};
  border: 1px solid ${props => props.colorStyle.borderColor};
  &:hover {
    opacity: 0.9;
  }
`
