import React from 'react';

import styled from 'styled-components';


export class Table extends React.Component {
  _getHeaders = (columns, rowStyle) => {
    const _columns = columns.map((col, index) => {
      const { header } = col;
      return <Column key={index}>{header}</Column>;
    })
    return <Row rowStyle={rowStyle}>{_columns}</Row>;
  }
  _getHeaderStyle = (headerStyle) => {
    return {
      height: "50px",
      lineHeight: "50px",
      textAlign: "center",
      ...headerStyle
    }
  }
  _getContents = (columns, data, rowStyle) => {
    return data.map((rowData, rowIndex) => {
      const _columns = columns.map((column, colIndex) => {
        const Component = column.component;
        return <Column key={colIndex}><Component rowData={rowData} row={rowIndex} col={colIndex} /></Column>;
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
  _getPagination = (paginationStyle) => {
    const _paginationStyle = {
      type: "none",
      ...paginationStyle
    }
    switch (_paginationStyle.type) {
      case "more":
        const { onMoreClick } = _paginationStyle;
        return <More onClick={(e) => this._handleMoreClick(onMoreClick)}>More +</More>
        break;
      case "pagination":
        return <Pagination />
        break;
      case "none":
        return null;
        break;
      default:
        throw Error("pagination style isn't correct");
        break;
    }
  }
  /*-------------------------------------------------------------------------*/
  state = {
    pageSize: 10,
    pageStart: 1, // Row Index
  }
  _handleMoreClick = async (onClick) => {
    console.log("Table More Button Clicked");
    if(!onClick || onClick()) {
      
    }
  }
  /*-------------------------------------------------------------------------*/
  render() {
    const {
      data,
      columns,
      headerStyle,
      rowStyle,
      paginationStyle } = this.props;
    const rowSize = data.length || data.size;
    const colSize = columns.length || columns.size;

    return (
      <Container>
        <Header>{this._getHeaders(columns, this._getHeaderStyle(headerStyle))}</Header>
        <Contents>{this._getContents(columns, data, this._getRowStyle(rowStyle))}</Contents>
        <Footer>{this._getPagination(paginationStyle)}</Footer>
      </Container>
    )
  }
}

const More = styled.div`
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  background-color: #71a1ed;
  color: white;
  border-radius: 0px 0px 5px 5px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #4286f4;
  }
`
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
