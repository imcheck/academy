import React from "react";
import styled from "styled-components";

import StudentMenuIcon from "@components/StudentMenuIcon";
import LectureMenuIcon from "@components/LectureMenuIcon";
import ReceiptMenuIcon from "@components/ReceiptMenuIcon";
import FinancialMenuIcon from "@components/FinancialMenuIcon";
import TeacherMenuIcon from "@components/TeacherMenuIcon";

const Navigation = (props) => (
  <Menu>
    <StudentMenuIcon />
    <LectureMenuIcon/>
    <TeacherMenuIcon/>
    <ReceiptMenuIcon/>
    <FinancialMenuIcon/>
  </Menu>
)

export default Navigation;

const Menu = styled.div`
`