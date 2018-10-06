import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const StudentMenuIcon = (props) => {
  return (
    <Link to="/student">
      <Container>
        <FontAwesomeIcon icon={faUsers} size="3x"/>
        <Text>학생 관리</Text>
      </Container>
    </Link>
  )
}
export default StudentMenuIcon;

const Container = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid gray;
  margin: 5px 5px;
  box-shadow: 3px 3px 5px gray;
  padding: 20px;
  color: white;
  background-color: ${props => props.theme._components.blue};
  &:hover {
    background-color: ${props => props.theme._components.blue2}
  }
`
const Text = styled.div`
  font-size: 12px;
  margin-top: 10px;
`