
import React, { Component } from 'react';
import Header from '../Components/headerComponent/header';
import { Card, CardGroup, CardImg,CardText,CardBody,CardTitle, Progress, CardSubtitle, NavLink,FormGroup,Label,Input,Button,Row,Col,Container } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import { Redirect } from 'react-router'
import axios from 'axios';

// import Header from '../Components/headerComponent/header';
var localInstance = axios.create({
  baseURL: 'http://localhost:8000/api/auth/',
  headers: {
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "*",
 
  }
});
 
 
 class Login extends Component {
  constructor(props) {
    super(props);

    this.handleValidSubmit = this.handleValidSubmit.bind(this)

    this.state = {
      email: '',
      password: '',
      fireRedirect: false

    };
  }

  // updateEmail(value) {
  //   this.setState({
  //     email: value,
  //   });
  // }

  // updatePassword(value) {
  //   console.log('Password changed');
  //   this.setState({
  //     password: value,
  //   });
  // }
  handleValidSubmit(event, values) {
     event.preventDefault();
    this.setState({
      values
     })
     const email = this.state.values.email;
     const password = this.state.values.password;
 alert(email + password);
  
  // }

  // submit() {
  //   const email = this.state.email;
  //   const password = this.state.password;
    alert('Email address is ' + email + ' Password is ' + password);  
    localInstance.post('/login', {
      email: email,
      password: password
    })
    .then((response) => {
      alert(`Server response: \n${JSON.stringify(response)}`);
      this.setState({  fireRedirect: true})
    })
    .catch((error) => {
      alert(`Error logging in: \n${error}`);
    });
  }

  render() {
    const { fireRedirect } = this.state
    const { from } = this.props.location.state || '/'

    return (
      <div>
              <Header />
              <AvForm className="text-form text" onValidSubmit={this.handleValidSubmit}>

              <AvField name="email" label="Email" type="email"  validate={{required: {value: true}}} />


              <AvField name="password" label="Password" type="password" placeholder="********" validate={{minLength: {value: 5}, required: {value: true}}} />

              <Button  className='btn'  outline color="secondary">Enter</Button>      
              </AvForm>
              
              {fireRedirect && (<Redirect to={from || '/profile'}/>)}

 
       </div>
    )
  }
}

export default Login;