import React, { Component } from 'react';
import Header from '../Components/headerComponent/header';
import './pages.css'; 
import { Card,CardText,CardTitle, NavLink,Button, ButtonGroup, Row,Col, } from 'reactstrap';
//import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import Footer from '../Components/footerComponent/footer';

 class About extends Component {

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

<br/>

  <div className='homePad'>
  
      <Row>
      
      <Col sm="12" md={{ size: 8, offset: 2 }}>
      <Card body className="text-center transparentBG" inverse style={{borderColor: 'white' }}> 
        <CardTitle><div className="titleText">About Fridgy</div></CardTitle>
        <CardText>
        <div className="secondText">A food inventory system for your home. 
        </div>
      
        <div>
        <ButtonGroup>

        <NavLink href="/signup/1">
        <Button id="btnL" outline color="warning">Sign Up</Button>
        </NavLink>

         <NavLink href="/login">
        <Button id="btnR" outline color="warning">Log In</Button>
        </NavLink>
        </ButtonGroup>
        <br />
        <br/>
        </div>
          <div className="text">
          <div>
          Fridgy is a brand new app, that helps you keep track of the food in your home. Our app:
          </div>

          <div>
          <br />
          <ul>
            <li>Keeps an inventory of the food in your fridge and pantry</li>
            <li>Allows you to view and change the inventory</li>
            <li>Suggests recipes based on what is in your inventory </li>
            <li>Automatically updates your inventory when you complete a recipe</li>
            <li> <font color="red">Saves you money and eliminates food waste!</font></li>

          </ul>
             <br/> 
          We created fridgy because we wanted to find a way to get amazing recipes without 
          forgetting about what we already have at home. As well as never having to wonder what 
          you could make when you have a fully stocked fridge at home and no good ideas about what to make. 
          <br />
          <br />
          Never get stuck wondering what there is to make in your fridge, on your way home from a 
          long day at work or school. Fridgy allows you to view, choose a recipe and if needed stop on the way
          to pick up any needed ingredients.

       </div>
       </div>
              </CardText>
              <br/>
    

       </Card>

          </Col>
    </Row>
    </div>
<Footer />
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


export default About;
