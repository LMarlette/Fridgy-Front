import React, { Component } from 'react';
import Header from '../Components/headerComponent/header';
import './pages.css'; 
import { Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle, NavLink,FormGroup,Label,Input,Button,Row,Col,Container } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
 
 class SignUp extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
 
  render() {
    return (
 
    <div className="cComponent" style={divStyle} >
  
    <Header />



        </div>
     );
  }
}

const bgimg1 = require('../Assets/images/bg1.jpg');
const divStyle = {
  width: '100%',
  height: '800px',
  backgroundImage: `url(${bgimg1})`,
  backgroundSize: 'cover'  
};

export default SignUp;
