
import React, { Component } from 'react';
import Header from '../Components/headerComponent/header';
import { Card, CardGroup, CardImg,CardBody,CardTitle,Button,Row,Col,NavLink } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Redirect } from 'react-router'
import { localInstance } from '../config/instances';
import axios from 'axios';
import food from '../Assets/images/food1.jpg';
import logo from '../Assets/images/fridgy-logo.svg'
import Footer from '../Components/footerComponent/footer'

 class Login extends Component {
  constructor(props) {
    super(props);

    this.handleValidSubmit = this.handleValidSubmit.bind(this)

    this.state = {
      isOpen: false,

      email: '',
      password: '',
      fireRedirect: false

    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
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
    axios.post('/auth/login', {
      email: email,
      password: password
    })
    .then((response) => {
      alert(`Server response: \n${JSON.stringify(response.data.msg)}\nWelcome ${JSON.stringify(response.data.firstName)}`);
      //localStorage.setItem('fridgyCookie', response.data.cookie);
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
<div className="cComponent" style={divStyle} >
        <Header />

<br/>
<br/>

 <Row> 
    <Col sm="12" md={{ size: 8, offset: 2 }}>
    
    <CardGroup> 

      <Card >
      <CardImg width="100%" src={food} alt="food prep img" />


      </Card>


      <Card body className="transparentBG" inverse style={{borderColor: 'white' }}> 
      <br/>
      <br/>

        <CardTitle><div className="titleText">Login</div></CardTitle>
        <br/>

        <CardBody  >
        <AvForm className="text-form text" onValidSubmit={this.handleValidSubmit}>
          <AvField name="email" label="Email" type="email"  validate={{required: {value: true}}} />
          <br/>

          <AvField name="password" label="Password" type="password" placeholder="********" validate={{minLength: {value: 5}, required: {value: true}}} />
          <NavLink href='/signup/1'><div className="small">Not a member? <b>Signup</b></div></NavLink>

          <br/>
          <br/>

          <Button  className='btn'  outline color="secondary">Enter</Button>      
        </AvForm>
              <br/>

        {fireRedirect && (<Redirect to={from || '/profileWelcome'}/>)}

 
        </CardBody>
      </Card>
 </CardGroup>
</Col>
</Row>
<br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
<Footer/>
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

export default Login;