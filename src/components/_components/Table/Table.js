import React from 'react';

import styled from 'styled-components';

import MoreBtn from './MoreButton';
import Pagination from './Pagination';
import PageSize from './PageSize';
import Debug from 'debug';

const debug = Debug("Table");

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
        if (pageSize * (page - 1) <= rowIndex && rowIndex < pageSize * page) return true;
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
        return <Column key={colIndex}><Component rowData={rowData} row={rowIndex} col={colIndex}/></Column>;
      });
      return <Row key={rowIndex} rowStyle={rowStyle}>{_columns}</Row>;
    });
  }
  _getPagination = () => {
    const { paginationStyle, page, pageSize, data } = this.state;
    switch (paginationStyle.type) {
      case "more":
        const { onMoreClick } = paginationStyle;
        return <MoreBtn onClick={(e) => this._handleMoreClick(onMoreClick)}/>
        break;
      case "pagination":
        const dataSize = data.length || data.size;
        const maxPageNumber = Math.floor((dataSize + pageSize - 1) / pageSize);
        const pageNumbers = [];
        if (page <= 3) {
          for (let i = 1; i <= Math.min(5, maxPageNumber); i++)
            pageNumbers.push(i);
        } else if (page >= maxPageNumber - 2) {
          for (let i = maxPageNumber - 4; i <= maxPageNumber; i++)
            pageNumbers.push(i);
        } else {
          for (let i = page - 2; i <= page + 2; i++)
            pageNumbers.push(i);
        }
        return (
          <React.Fragment>
            <PageSize onChange={this._handlePageSizeChange} size={this.state.pageSize}/>
            <Pagination pageNumbers={pageNumbers} onClick={this._handlePaginationNoClick} page={page}/>
          </React.Fragment>
        )
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
  _handlePaginationNoClick = (page) => {
    this.setState(state => ({ page }));
  }
  _handlePageSizeChange = (pageSize) => {
    this.setState(state => ({
      page: Table.DefaultStartPage,
      pageSize
    }));
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
      type: "none",
      position: "bottom",
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

  /*-------------------------------------------------------------------------*/
  render() {
    return (
      <Container>
        <Header>
          {this.state.paginationStyle.position !== "bottom" && this.state.paginationStyle.type !== "none"
            ? <PaginationCont>{this._getPagination()}</PaginationCont>
            : null}
        </Header>
        <TableCont>
          <THeader>{this._getHeaders()}</THeader>
          <Contents>{this._getContents()}</Contents>
        </TableCont>
        <Footer>
          {this.state.paginationStyle.position !== "top" && this.state.paginationStyle.type !== "none"
            ? <PaginationCont>{this._getPagination()}</PaginationCont>
            : null}
        </Footer>
      </Container>
    )
  }

  componentDidMount() {
    // console.log(this.state);
  }
}

const Container = styled.div`
  & div {
    box-sizing: border-box;
  }
`
const THeader = styled.div`
  border-radius: 5px 5px 0px 0px;
  background-color: ${props => props.theme._components.blue};
  border-bottom: 1px solid #e8e8e8;
`;
const Contents = styled.div`
  & > div {
    border-bottom: 1px solid #e8e8e8;
  }
`;
const PaginationCont = styled.div`
  height: 40px;
`;
const TableCont = styled.div`
  margin: 10px 0px;
  border-bottom: 1px solid 
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
const Header = styled.div``
const Footer = styled.div``
