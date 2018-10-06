import React from "react";

import styled from "styled-components";
import Navigation from "@components/Navigation";


const CommonLayout = (props) => {
  return (
    <Layout>
      <Header>
        <Navigation />
      </Header>
      <Body>
        {props.children}
      </Body>
    </Layout>
  )
}

export default CommonLayout;

const Layout = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
const Header = styled.div`
  padding: 20px 20px 10px 20px;
  border-bottom: 1px solid ${props => props.theme._components.gray};
`
const Body = styled.div`
  padding: 20px;
`

