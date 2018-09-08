import React from 'react';

import styled from 'styled-components';


class Table extends React.Component {
  _getHeaders = (columns, rowStyle) => {
    const _columns = columns.map( col => {
      const { header } = col;
      return <Column>{header}</Column>;
    })
    return <Row rowStyle={rowStyle}>{_columns}</Row>;
  }
  _getHeaderStyle = (headerStyle) => {
    return {
      height: "50px",
      lineHeight: "50px",
      textAlign: "center",
      pinned: false,
      ...headerStyle
    }
  }
  _getContents = (columns, data, rowStyle) => {
    return data.map((rowData, rowIndex) => {
      const _columns = columns.map((column, colIndex) => {
        const Component = column.component;
        return <Column key={colIndex}><Component rowData={rowData} row={rowIndex} col={colIndex}/></Column>;
      });
      return <Row key={rowIndex} rowStyle={rowStyle}>{_columns}</Row>;
    });
  }
  _getRowStyle = (rowStyle) => {
    return {
      height: "40px",
      lineHeight: "40px",
      textAlign: "center",
      ...rowStyle
    }
  }
  render() {
    const { data, columns, headerStyle, rowStyle } = this.props;
    const rowSize = data.length || data.size;
    const colSize = columns.length || columns.size;

    return (
      <Container>
        <Header>{this._getHeaders(columns, this._getHeaderStyle(headerStyle))}</Header>
        <Contents>{this._getContents(columns, data, this._getRowStyle(rowStyle))}</Contents>
        <Footer></Footer>
      </Container>
    )
  }
}

export default Table;


const Container = styled.div`
  & div {
    box-sizing: border-box;
  }
`
const Header = styled.div`
  border-radius: 5px 5px 0px 0px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #e8e8e8;
`;
const Contents = styled.div`
  & > div {
    border-bottom: 1px solid #e8e8e8;
  }
  & > div:last-child {
    border: none;
  }
`;
const Footer = styled.div`
  height: 40px;
  background-color: lightgreen;
`;
const Row = styled.div`
  height: ${props => props.rowStyle.height}
  line-height: ${props => props.rowStyle.lineHeight}
  text-align: ${props => props.rowStyle.textAlign}
  display: flex;
`;
const Column = styled.div`
  flex: 1;
`;