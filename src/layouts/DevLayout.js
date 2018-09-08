import React from 'react';
import styled from 'styled-components';

import { Input, _Input, Table } from '@components';
import ErrorHOC from '@hoc';

const Container = styled.div`
  padding: 10px;
  & > * {
    margin: 10px 0px;
  }
`
const Title = styled.div`
  font-size: 32px;
  color: black;
  font-weight: bold;
  border-bottom: 2px solid black;
`
class DevLayout extends React.Component {
  render() {
    return (
      <Container>
        <Title>Input</Title>
        <Input />
        <_Input />
        <Table
          data={[
            { attr1: "attr1", attr2: "attr2", attr3: "attr3", attr4: "attr4", attr5: "attr5", attr6: "attr6" },
            { attr1: "attr1", attr2: "attr2", attr3: "attr3", attr4: "attr4", attr5: "attr5", attr6: "attr6" },
            { attr1: "attr1", attr2: "attr2", attr3: "attr3", attr4: "attr4", attr5: "attr5", attr6: "attr6" },
            { attr1: "attr1", attr2: "attr2", attr3: "attr3", attr4: "attr4", attr5: "attr5", attr6: "attr6" },
            { attr1: "attr1", attr2: "attr2", attr3: "attr3", attr4: "attr4", attr5: "attr5", attr6: "attr6" },
            { attr1: "attr1", attr2: "attr2", attr3: "attr3", attr4: "attr4", attr5: "attr5", attr6: "attr6" },
            { attr1: "attr1", attr2: "attr2", attr3: "attr3", attr4: "attr4", attr5: "attr5", attr6: "attr6" },
            { attr1: "attr1", attr2: "attr2", attr3: "attr3", attr4: "attr4", attr5: "attr5", attr6: "attr6" },
            { attr1: "attr1", attr2: "attr2", attr3: "attr3", attr4: "attr4", attr5: "attr5", attr6: "attr6" },
            { attr1: "attr1", attr2: "attr2", attr3: "attr3", attr4: "attr4", attr5: "attr5", attr6: "attr6" },
            { attr1: "attr1", attr2: "attr2", attr3: "attr3", attr4: "attr4", attr5: "attr5", attr6: "attr6" },
            { attr1: "attr1", attr2: "attr2", attr3: "attr3", attr4: "attr4", attr5: "attr5", attr6: "attr6" },
            { attr1: "attr1", attr2: "attr2", attr3: "attr3", attr4: "attr4", attr5: "attr5", attr6: "attr6" },
            { attr1: "attr1", attr2: "attr2", attr3: "attr3", attr4: "attr4", attr5: "attr5", attr6: "attr6" },
            { attr1: "attr1", attr2: "attr2", attr3: "attr3", attr4: "attr4", attr5: "attr5", attr6: "attr6" },
            { attr1: "attr1", attr2: "attr2", attr3: "attr3", attr4: "attr4", attr5: "attr5", attr6: "attr6" },
            { attr1: "attr1", attr2: "attr2", attr3: "attr3", attr4: "attr4", attr5: "attr5", attr6: "attr6" },
            { attr1: "attr1", attr2: "attr2", attr3: "attr3", attr4: "attr4", attr5: "attr5", attr6: "attr6" },
            { attr1: "attr1", attr2: "attr2", attr3: "attr3", attr4: "attr4", attr5: "attr5", attr6: "attr6" },
            { attr1: "attr1", attr2: "attr2", attr3: "attr3", attr4: "attr4", attr5: "attr5", attr6: "attr6" }]}
          columns={[
            {
              header: "Attr1",
              component: ({ rowData, row, col }) => <div>({row}, {col})</div>
            },
            {
              header: "Attr2",
              component: ({ rowData, row, col }) => <div>({row}, {col})</div>
            },
            {
              header: "Attr3",
              component: ({ rowData, row, col }) => <div>({row}, {col})</div>
            },
            {
              header: "Attr4",
              component: ({ rowData, row, col }) => <div>({row}, {col})</div>
            },
            {
              header: "Attr5",
              component: ({ rowData, row, col }) => <div>({row}, {col})</div>
            },
            {
              header: "Attr6",
              component: ({ rowData, row, col }) => <div>({row}, {col})</div>
            }
          ]} />
      </Container>
    );
  }
}
export default ErrorHOC(DevLayout);
