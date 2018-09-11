import React from 'react';

import styled from 'styled-components';

import MoreBtn from './MoreButton';
import Pagination from './Pagination';

export class Table extends React.Component {
  static DefaultPageSize = 10;
  static DefaultStartPage = 1;
  state = { pageSize: Table.DefaultPageSize, page: Table.DefaultStartPage };
  /*-------------------------------------------------------------------------*/
  _getHeaders = () => {
    const { columns, rowStyle } = this.state;
    const _columns = columns.map((col, index) => {
      const { header } = col;
      return <Column key={index}>{header}</Column>;
    })
    return <Row rowStyle={rowStyle}>{_columns}</Row>;
  }
  _filter = ((rowData, rowIndex) => {
    const { page, pageSize } = this.state;
    switch (this.state.paginationStyle.type) {
      case "more":
        if (rowIndex < pageSize * page) return true;
        break;
      case "pagination":
        if (pageSize * page <= rowIndex && rowIndex < pageSize * (page + 1)) return true;
        break;
      case "none":
        return true;
        break;
      default:
        throw Error("pagination type isn't correct");
        break;
    }
    return false;
  })
  _getContents = () => {
    const { data, columns, rowStyle } = this.state;
    return data.filter(this._filter).map((rowData, rowIndex) => {
      const _columns = columns.map((column, colIndex) => {
        const Component = column.component;
        return <Column key={colIndex}><Component rowData={rowData} row={rowIndex} col={colIndex} /></Column>;
      });
      return <Row key={rowIndex} rowStyle={rowStyle}>{_columns}</Row>;
    });
  }
  _getPagination = () => {
    const { paginationStyle } = this.state;
    switch (paginationStyle.type) {
      case "more":
        const { onMoreClick } = paginationStyle;
        return <MoreBtn onClick={(e) => this._handleMoreClick(onMoreClick)} />
        break;
      case "pagination":
        return <Pagination />
        break;
      case "none":
        return null;
        break;
      default:
        throw Error("pagination type isn't correct");
        break;
    }
  }
  /*-------------------------------------------------------------------------*/
  _handleMoreClick = (onClick) => {
    if (!onClick || onClick()) {
      const { pageSize, page } = this.state;
      const dataSize = this.state.data.length || this.state.data.size;
      if (dataSize > page * pageSize) {
        this.setState(state => ({
          page: page + 1
        }))
      }
    }
  }
  /*-------------------------------------------------------------------------*/
  render() {
    return (
      <Container>
        <Header>{this._getHeaders()}</Header>
        <Contents>{this._getContents()}</Contents>
        <Footer>{this._getPagination()}</Footer>
      </Container>
    )
  }
  static getDerivedStateFromProps(props) {
    return {
      ...props,
      paginationStyle: Table.GetPaginationStyle(props.paginationStyle),
      headerStyle: Table.GetHeaderStyle(props.headerStyle),
      rowStyle: Table.GetRowStyle(props.rowStyle)
    }
  }
  static GetPaginationStyle(paginationStyle) {
    const defaultPaginationStyle = {
      type: "none"
    }
    return {
      ...defaultPaginationStyle,
      ...paginationStyle
    }
  }
  static GetHeaderStyle(headerStyle) {
    const defaultHeaderStyle = {
      height: "50px",
      lineHeight: "50px",
      textAlign: "center"
    }
    return {
      ...defaultHeaderStyle,
      ...headerStyle
    }
  }
  static GetRowStyle(rowStyle) {
    const defaultRowStyle = {
      height: "40px",
      lineHeight: "40px",
      textAlign: "center",
    }
    return {
      ...defaultRowStyle,
      ...rowStyle
    }
  }
}

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
