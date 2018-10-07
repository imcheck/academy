import React from 'react';
import styled from 'styled-components';
import { Auth } from "@models";

import ErrorHOC from '@hoc';
import { getURL } from "@config/authConfig";

class Login extends React.Component {
  render() {
    return (
      <Container>
        <a href={getURL("academy")}>구글로그인</a>
      </Container>
    )
  }
  componentDidMount() {
    if(this.props.history.location.hash) {
      var hash = this.props.history.location.hash.substr(1);
      var result = hash.split('&').reduce(function (result, item) {
        var parts = item.split('=');
        result[parts[0]] = parts[1];
        return result;
      }, {});
      Auth.SaveAccessToken("google", result.access_token);
      this.props.history.push('/');
    }
  }
}

export default ErrorHOC(Login);


const Container = styled.div``;
