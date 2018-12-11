import React, { Component } from 'react';
import HeaderLogin from '../Components/headerComponent/headerLogin';
import './pages.css'; 
import { Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle, CardDeck, CardColumns, NavLink,FormGroup,Label,Input,Button, ButtonGroup, Row,Col,Container } from 'reactstrap';
import Footer from '../Components/footerComponent/footer';
import Avacado from '/Users/Shruti/Desktop/Fridgy-Front/src/Assets/images/avacado.jpg'; 

class Profile extends Component {
  
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
   
      <div style={divStyle} >
    
      <HeaderLogin />
  
  <br/>
  
    <div>
  

    <CardColumns className="px-4 py-3">   
      <Col> 
        <Card body>
            <CardBody>
            <CardImg top width="100%" src={Avacado} alt="Profile image" className="card-img-top rounded-circle"/>
             
              <CardTitle className="titleText">User Name</CardTitle>
              <br/>
              <CardSubtitle className="secondText" >Full Name</CardSubtitle>
              <br/>
              <CardText className="textCenter">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <ButtonGroup>
              <NavLink href="">
              <Button id="btn" outline color="secondary">Edit</Button>
              </NavLink>
              </ButtonGroup> 
            </CardBody>
         </Card>
         </Col>

         <Col>         
            <Card body>
              <CardBody>
                <CardTitle className="titleText">Card 1</CardTitle>
                <CardSubtitle className="secondText" >Card subtitle</CardSubtitle>
              <br/>
                <CardText className="text">This card has supporting text below as a natural lead-in to additional content.</CardText>
              </CardBody>
            </Card>
            <Card body>
              <CardBody>
                <CardTitle className="titleText">Card 2</CardTitle>
                <CardSubtitle className="secondText" >Card subtitle</CardSubtitle>
                <br/>
                <CardText className="text">This card has supporting text below as a natural lead-in to additional content.</CardText>
              </CardBody>
            </Card>
            <Card body>
              <CardBody>
                <CardTitle className="titleText">Card 3</CardTitle>
                <CardSubtitle className="secondText" >Card subtitle</CardSubtitle>
                  <br/>
                <CardText className="text">This card has supporting text below as a natural lead-in to additional content.</CardText>
              </CardBody>
            </Card>
      
            <Card body>
              <CardBody>
                <CardTitle className="titleText">Card 4</CardTitle>
                <CardSubtitle className="secondText" >Card subtitle</CardSubtitle>
                  <br/>
                <CardText className="text">This card has supporting text below as a natural lead-in to additional content.</CardText>
              </CardBody>
            </Card>
            <Card body>
              <CardBody>
                <CardTitle className="titleText">Card 5</CardTitle>
                <CardSubtitle className="secondText" >Card subtitle</CardSubtitle>
                <br/>
                <CardText className="text">This card has supporting text below as a natural lead-in to additional content.</CardText>
              </CardBody>
            </Card>
              <Card body>
                <CardBody>
                  <CardTitle className="titleText">Card 6</CardTitle>
                  <CardSubtitle className="secondText" >Card subtitle</CardSubtitle>
                      <br/>
                  <CardText className="text">This card has supporting text below as a natural lead-in to additional content.</CardText>
                </CardBody>
              </Card>
              </Col> 

   </CardColumns> 

</div>
      


            <br/>
     
  <Footer />
          </div>
       );
    }
  }
  
  const bgimg1 = require('../Assets/images/bg3.jpg');
  const divStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${bgimg1})`,
    backgroundSize: 'cover'  
  };
  
  
  export default Profile;
  




