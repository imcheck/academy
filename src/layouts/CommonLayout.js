import styled from "styled-components";
import Search from '@containers/Search';

import React from "react";


const CommonLayout = (props) => {
  return (
    <Layout>
      <Header>
        <Search />
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
  padding: 20px;
  border-bottom: 1px solid ${props => props.theme._components.gray};
`
const Body = styled.div`
  padding: 20px;
`

