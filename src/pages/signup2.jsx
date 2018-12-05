import React, { Component } from 'react';
import Header from '../Components/headerComponent/header';
import './pages.css'; 

//reactstrap nonsense
import { Card, CardGroup, CardImg,CardText,CardBody,CardTitle, Progress, CardSubtitle, NavLink,FormGroup,Label,Input,Button,Row,Col,Container } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import { Redirect } from 'react-router'

//images
import food from '../Assets/images/food2.jpg';
import logo from '../Assets/images/fridgy-logo.svg'


 class SignUp2 extends Component {

  constructor(props) {
    super(props);
    
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      fireRedirect: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
 

  handleValidSubmit(event, values) {
    event.preventDefault()
   this.setState({ 
     fireRedirect: true, values })
    
     const diet = this.state.values.dietType;
     const allergy = this.state.values.allergy;
     const otherAllergy = this.state.values.otherAllergy;
     const select = this.state.values.select;
 
     localStorage.setItem('diet', select);
     localStorage.setItem('allergy', allergy);
     localStorage.setItem('otherAllergy', otherAllergy);
  
  }

  render() {
    const { from } = this.props.location.state || '/'

    const { fireRedirect } = this.state

    return (
     <div className="cComponent" style={divStyle} >
{/* <div> */}
      <header>
     <div className='center'> 
      <img src={logo} className="headerLogo" alt="Fridgy Logo" />

        FRIDGY
        
        </div>
    
      </header>
      
  
  <Row>
    <Col sm="12" md={{ size: 8, offset: 2 }}>
    
    <CardGroup> 
      <Card >
 
      <CardImg width="100%" src={food} alt="food prep img" />
 
      </Card>
 
       <Card body inverse style={{borderColor: 'white' }}> 
        <CardTitle><div className="titleText">Edit Food Preferences</div></CardTitle>

        <CardBody>
        <div className="text-center text">2 of 2</div>
      <Progress value="50" />
        <br />




<AvForm className="text-form text" onValidSubmit={this.handleValidSubmit}>
 
       
<FormGroup>
          <Label>Diet Type</Label>
          <AvField type="select" name="select">
          <option>Select</option>
            <option>Vegetarian</option>
            <option>Kosher</option>
            <option>Vegan</option>
            <option>Paleo</option>
            <option>Whole 30</option>
          </AvField>
        </FormGroup>
        
   

              <FormGroup>
              <Label>Allergies</Label>

             <AvRadioGroup inline name="allergy" >
             &emsp;
          <AvRadio customInput label="gluten" value="Gluten" />
          <AvRadio customInput label="dairy" value="Dairy" />
          <AvRadio customInput label="nuts" value="Nuts" />
          <br />
          &emsp;
          &emsp;
          &emsp;

          <AvRadio customInput label="shellfish" value="Shellfish" />
          <AvRadio customInput label="soy" value="Soy" />
          <AvRadio customInput label="eggs" value="Eggs" />
        </AvRadioGroup>
        </FormGroup>



        
        <FormGroup>
               <AvField type="text" name="otherAllergy" placeholder="Other Allergy?"/>
            </FormGroup>

<FormGroup>
<Button className='btn' outline color="secondary">Enter</Button>      
</FormGroup>

</AvForm>
  
 {fireRedirect && (<Redirect to={from || '/profile'}/>)}
 

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

export default SignUp2;
