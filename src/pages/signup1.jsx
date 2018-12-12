import React, { Component } from 'react';
import Header from '../Components/headerComponent/header';
import './pages.css'; 

//reactstrap nonsense
import { Card, CardGroup,CardBody,CardTitle, Progress, NavLink,Button,Row,Col } from 'reactstrap';
import { AvForm, AvField} from 'availity-reactstrap-validation';
import { Redirect } from 'react-router'

//images
import food from '../Assets/images/food2.jpg';
//import logo from '../Assets/images/fridgy-logo.svg'


 class SignUp1 extends Component {

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
        const uName = this.state.values.uName;

        const email = this.state.values.email;
        const pw = this.state.values.password2;

        localStorage.setItem('fName', fName);
        localStorage.setItem('lName', lName);
        localStorage.setItem('uName', uName);
        localStorage.setItem('email', email);
        localStorage.setItem('pw', pw);

      
 

   }

  render() {
    const { from } = this.props.location.state || '/'

    const { fireRedirect } = this.state

    return (
<div className="cComponent" style={divStyle} >
<Header />
      <br />
      <br/>

  
  <Row>
    <Col sm="12" md={{ size: 8, offset: 2 }}>
    
    <CardGroup> 
      <Card >
 
 <div><img className="stretch" src={food} alt="food prep img" /></div>
      
 
      </Card>
 
       <Card body inverse style={{borderColor: 'white' }}> 
        <CardTitle><div className="titleText">Sign Up</div></CardTitle>

        <CardBody>
        <div className="text-center text">1 of 2</div>
      <Progress value="0" />
        
      <AvForm className="text-form text" onValidSubmit={this.handleValidSubmit}>
 
 <AvField className="intake-form" id='fName' name="fName" label="First Name" type="text"  errorMessage="Please enter your first name " 
 validate={{
required: {value: true},
pattern: {value: '^[A-Za-z0-9]+$'},
minLength: {value: 3},
maxLength: {value: 25}
}} />

 <AvField className="intake-form" name="lName" label="Last Name" type="text"  errorMessage="Please enter your last name" 
 validate={{
required: {value: true},
pattern: {value: '^[A-Za-z0-9]+$'},
minLength: {value: 3},
maxLength: {value: 25}
}} />

  <AvField className="intake-form" name="uName" label="User Name" type="text"  errorMessage="Please enter a user name" 
 validate={{
required: {value: true},
pattern: {value: '^[A-Za-z0-9]+$'},
minLength: {value: 3},
maxLength: {value: 25}
}} />

 <AvField name="email" label="Email" type="email"  validate={{required: {value: true}}} />

<AvField name="password1" label="Password" type="password" placeholder="********" validate={{minLength: {value: 5}, required: {value: true}}} />
<AvField name="password2" label="Re-Enter Password" type="password" placeholder="********" errorMessage="Passwords must match"  validate={{match:{value:'password1'}, minLength: {value: 5}, required: {value: true}}} />

<NavLink href='/login'><div className="small">Already Member? <b>Login</b></div></NavLink>


 <Button  className='btn'  outline color="secondary">Next</Button>      
 </AvForm>
  
{fireRedirect && (<Redirect to={from || '/signup/2'}/>)}
 

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
            <br />
            <br />
            <br />

        </div>
     );
  }
}

const bgimg1 = require('../Assets/images/bg1.jpg');
const divStyle = {
  width: '100%',
  height: '100%',
  backgroundImage: `url(${bgimg1})`,
  backgroundSize: 'cover'  
};

export default SignUp1;
