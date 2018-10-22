import styled from "styled-components";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import React from "react";


import ErrorHOC from "@hoc";
import CommonLayout from "@layouts/CommonLayout";
import PageLoad from "@containers/PageLoad";
import { Button } from "@components";
import TeacherTable from "@containers/TeacherTable";

class Teacher extends React.Component {
  state = {
    teacherModalVisible: false
  }
  _handleTeacherModal = (type) => {
    if (type === "open") {
      this.setState(state => ({
        teacherModalVisible: true
      }))
    } else {
      this.setState(state => ({
        teacherModalVisible: false
      }))
    }
  }
  render() {
    return (
      <CommonLayout>
        <Header>
          <Title>
            <FontAwesomeIcon icon={faChalkboardTeacher} />
            &nbsp;강사
            </Title>
          <Container>
            <Row>강사 추가, 수정, 검색기능을 할 수 있습니다.</Row>
            <Row>
              <Button onClick={() => this._handleTeacherModal("open")} height="30px" positive>+ 강사 추가</Button>
            </Row>
          </Container>
        </Header>
        <TeacherTable />
        {/*<StudentEditModal*/}
        {/*student={new Student()}*/}
        {/*visible={this.state.studentModalVisible}*/}
        {/*onClose={() => this._handleStudentModal("close")}/>*/}
      </CommonLayout>
    )
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default ErrorHOC(connect(mapStateToProps, mapDispatchToProps)(Teacher));

const Header = styled.div`
  height: 60px;
  margin-bottom: 10px;
`
const Title = styled.div`
  font-size: 48px;
  line-height: 48px;
  float: left;
`
const Container = styled.div`
  color: ${props => props.theme._components.gray}
  float: left;
  margin-left: 20px;
`
const Row = styled.div`
  height: 30px;
  line-height: 30px;
`
