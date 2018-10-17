import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import ErrorHOC from "@hoc";
import { Table, Button, Modal, InputForm } from "@components";
import Filter from "@components/TableFilter";
import { Teacher } from "@models";

class TeacherTable extends React.Component {
  state = {
    Teacher: new Teacher(),
    visible: false,
    filter: {
      optionValue: "",
      searchText: ""
    },
    disabled: true
  }

  _filter = (teacher) => {
    const { optionValue, searchText } = this.state.filter;
    if(optionValue) {
      return teacher[optionValue].includes(searchText);
    } else {
      return teacher.name.includes(searchText) || teacher.tel.includes(searchText);
    }
  }
  _handleSearch = ({optionValue, searchText }) => {
    this.setState(state => ({
      filter: {
        optionValue,
        searchText
      }
    }))
  }

  _handleDisabled = (disabled) => {
    this.setState(state => ({ disabled }));
  }

  render() {
    const filterOptions = [
      { value: "", text: "전체"},
      { value: "name", text: "이름"},
      { value: "tel", text: "번호"}
    ];
    const data = this.props.data.toJS().filter(this._filter);
    return (
      <Container>
        <Filter filterOptions={filterOptions} onSearch={this._handleSearch}/>
        <Table
          data={data}
          columns={[
            {
              header: "이름",
              component: ({rowData}) => <span>{rowData.name}</span>
            },
            {
              header: "강사 번호",
              component: ({rowData}) => <span>{rowData.tel}</span>
            },
            {
              header: "이메일",
              component: ({rowData}) => <span>{rowData.email}</span>
            },
            {
              header: "#",
              component: ({rowData}) => <BorderBtn onClick={() => this._handleDetailModal("open", rowData)}>상세</BorderBtn>
            }
          ]}
        />
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.user.teachers
});

const mapDispatchToProps = (dispatch) => ({

});

export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(TeacherTable));

const Container = styled.div`
`

const BorderBtn = styled.div`
  width: 70px;
  height: 30px;
  line-height: 30px;
  margin-top: 5px;
  border: 1px solid ${props => props.theme._components.blue};
  color: ${props => props.theme._components.blue};
  border-radius: 3px;
  display: inline-block;
  &:hover {
    color: ${props => props.theme._components.blue2};
    border: 1px solid ${props => props.theme._components.blue2};
  }
  cursor: pointer;
`

