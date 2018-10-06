import React from "react";
import styled from "styled-components";

import StudentMenuIcon from "@components/StudentMenuIcon";
import ClassMenuIcon from "@components/ClassMenuIcon";
import ReceiptMenuIcon from "@components/ReceiptMenuIcon";
import FinancialMenuIcon from "@components/FinancialMenuIcon";

const Navigation = (props) => (
  <Menu>
    <StudentMenuIcon />
    <ClassMenuIcon/>
    <ReceiptMenuIcon/>
    <FinancialMenuIcon/>
  </Menu>
)

export default Navigation;

const Menu = styled.div`
`