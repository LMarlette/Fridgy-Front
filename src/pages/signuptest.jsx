import React, { Component } from 'react';
import Header from '../Components/headerComponent/header';
import './pages.css'; 

import axios from 'axios';


//reactstrap nonsense
import { Card, CardGroup, CardImg,CardText,CardBody,CardTitle, Progress, CardSubtitle, NavLink,FormGroup,Label,Input,Button,Row,Col,Container } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import { Redirect } from 'react-router'

//images
import food from '../Assets/images/food2.jpg';
import logo from '../Assets/images/fridgy-logo.svg'
import SignUp1 from './signup1';

//signups
import Signup1 from './signup1';

 class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      fireRedirect: false,
     

    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
 

  handleValidSubmit(event, values) {
    event.preventDefault()
   this.setState({  fireRedirect: true, values
     //[event.target.name]: event.target.value
    })
     

    
        const fName = this.state.values.fName;
        const lName = this.state.values.lName;
        const email = this.state.values.email;
        const pw = this.state.values.password2;

        localStorage.setItem('fName', fName);
        localStorage.setItem('lName', lName);
        localStorage.setItem('email', email);
        localStorage.setItem('pw', pw);

      
 

  
}
 

render() {
  const { from } = this.props.location.state || '/'

  const { fireRedirect } = this.state
return (
  <div className="cComponent" style={divStyle} >

<Signup1 />

{fireRedirect && (<Redirect to={from || '/signup/2'}/>)}

    </div>
    
)

}

}
const bgimg1 = require('../Assets/images/bg1.jpg');
const divStyle = {
  width: '100%',
  height: '100%',
  backgroundImage: `url(${bgimg1})`,
  backgroundSize: 'cover'  
};


export default SignUp;
