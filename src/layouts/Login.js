import React from 'react';
import styled from 'styled-components';
import { Auth } from "@models";

import ErrorHOC from '@hoc';
import Axios from 'axios';

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  }
  _handleLogin = async () => {
    const { data } = await Axios.post("http://localhost:8001/signin", {
      email: this.state.email,
      password: this.state.password
    });
    if( data.status === 404 ) {
      alert(data.message);
    } else {
      localStorage.setItem("id_token", data.idToken);
      localStorage.setItem("refresh_code", data.refreshCode);
      this.props.history.push("/");
    }
  }
  _handleChange = (key, value) => {
    this.setState(state => ({
      [key]: value
    }));
  }
  render() {
    return (
      <Container>
        <input type="email" value={this.state.email}  onChange={(e) => this._handleChange("email", e.target.value)} placeholder="email" />
        <input type="password" value={this.state.password} onChange={(e) => this._handleChange("password", e.target.value)}placeholder="password" />
        <button onClick={this._handleLogin}>submit</button>
      </Container>
    )
  }
}

export default ErrorHOC(Login);


const Container = styled.div``;
