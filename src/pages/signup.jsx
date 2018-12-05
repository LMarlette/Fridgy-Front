import React, { Component } from 'react';
import './pages.css'; 

// reactstrap nonsense
import { Card, CardGroup, CardImg,CardText,CardBody,CardTitle, Progress, CardSubtitle, NavLink,FormGroup,Label,Input,Button,Row,Col,Container } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import { Redirect } from 'react-router'
import Header from '../Components/headerComponent/header';

// images
import food from '../Assets/images/food2.jpg';
import logo from '../Assets/images/fridgy-logo.svg';


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
      isOpen: !this.state.isOpen,
    });
  }


  handleValidSubmit(event, values) {
    console.log(values);
    event.preventDefault();
    this.setState({
      fireRedirect: true, values });
    localStorage.setItem('inputs', JSON.stringify(values));

  }

  render() {
    const { from } = this.props.location.state || '/';

    const { fireRedirect } = this.state;

    return (
      <div className="cComponent" style={divStyle}>

        <header>
        <div className="center">
       <img src={logo} className="headerLogo" alt="Fridgy Logo" />

        FRIDGY

     </div>

      </header>


        <Row>
    <Col sm="12" md={{ size: 8, offset: 2 }}>

      <CardGroup>
      <Card>

        <CardImg width="100%" src={food} alt="food prep img" />

      </Card>

      <Card body inverse style={{ borderColor: 'white' }}>
         <CardTitle><div className="titleText">Sign Up</div></CardTitle>

         <CardBody>
          <div className="text-center text">1 of 2</div>
          <Progress value="0" />

          <AvForm className="text-form text" onValidSubmit={this.handleValidSubmit}>

        <AvField
className="intake-form"
name="fName"
label="First Name"
type="text"
errorMessage="Please enter your first name "
   validate={{
   required: { value: true },
   pattern: { value: '^[A-Za-z0-9]+$' },
   minLength: { value: 3 },
   maxLength: { value: 25 },
 }}
 />

        <AvField
className="intake-form"
name="career"
label="Career Field"
type="text"
errorMessage="Please enter your career type"
   validate={{
   required: { value: true },
   pattern: { value: '^[A-Za-z0-9]+$' },
   minLength: { value: 3 },
   maxLength: { value: 25 },
 }}
 />


        <AvField name="email" label="Email" type="email" validate={{ required: { value: true } }} />




        <Button className="btn" outline color="secondary">Next</Button>

            </AvForm>

          {fireRedirect && (<Redirect to={from || '/signup2'} />)}


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
  backgroundSize: 'cover',
};

export default SignUp;
