
import React, { Component } from 'react';
import axios from 'axios';
// import Header from '../Components/headerComponent/header';
var localInstance = axios.create({
  baseURL: 'http://localhost:8000/api/auth/',
  headers: {
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});

 class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  updateEmail(value) {
    this.setState({
      email: value,
    });
  }

  updatePassword(value) {
    console.log('Password changed');
    this.setState({
      password: value,
    });
  }

  submit() {
    const email = this.state.email;
    const password = this.state.password;
    alert('Email address is ' + email + ' Password is ' + password);  
    localInstance.post('/login', {
      email: email,
      password: password
    })
    .then((response) => {
      alert(`Server response: \n${JSON.stringify(response)}`);
      
    })
    .catch((error) => {
      alert(`Error logging in: \n${error}`);
    });
  }

  render() {
    return (
      <form>
        <input
          type="email"
          onChange={(event) => {this.updateEmail(event.target.value)}}
          value={this.state.email}
        />
        <input
            type="password"
            checked={this.state.acceptedTerms}
            onChange={(event) => {this.updatePassword(event.target.value)}}
          />
        <button onClick={() => {this.submit()}}>Submit</button>
      </form>
    )
  }
}

export default Login;