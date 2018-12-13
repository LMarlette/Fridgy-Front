import React, { Component } from 'react';
import HeaderLogin from '../Components/headerComponent/headerLogin';
import './pages.css'; 
import { Card,CardImgOverlay, Row,CardImg,CardText,CardBody,CardTitle,CardSubtitle, CardColumns, NavLink,Button, ButtonGroup,Col } from 'reactstrap';
import Footer from '../Components/footerComponent/footer';
import Avacado from '../Assets/images/avacado.jpg'; 
import axios from 'axios'
import FridgeComponent from '../Components/fridge';
import recipe1 from '../Assets/images/foodPrep.jpg';
import recipe2 from '../Assets/images/foodPrep.jpg';

class ProfileWelcome extends Component {
  


    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false,
        userName: '',
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    componentWillMount() {
     
      axios.get('/auth/username')
     .then(response => {  
             //alert(JSON.stringify(response));  
         const userName = response.data.firstName
        this.setState({userName})
       //alert(userName);
  })
     .catch((error) => {
       alert(`Error querying for username: \n${error}`);
     });   
   }


   
    render() {
      const user = this.state.userName;

      return (
   
      <div style={divStyle} >
    
      <HeaderLogin />
  
  <br/>
  
    <div>
  

    <Col sm="12">   
     
 <Row>
      <Col sm="3" > 
        <Card body>
            <CardBody>
            <CardImg top width="100%" src={Avacado} alt="Profile image" className="card-img-top rounded-circle"/>
             <br/>
             <br/>

              <CardTitle className="text">Welcome Back</CardTitle>
              <br/>
              <CardSubtitle className="titleText" >{user}</CardSubtitle>
              <br/>
              <CardText className="secondText">From here you can view your Fridge, your homes inventory; search for recipes, select a recipe and view the instructions and missing ingredients you will need.</CardText>
              <ButtonGroup>
              <NavLink href="">
              <Button id="btn" outline color="secondary">Edit</Button>
              </NavLink>
              </ButtonGroup> 
            </CardBody>
         </Card>
         </Col>
        
         
           
             
            <Col sm="5">
            <div> <br /><h1 className="fridgeTitle">WELCOME</h1> <br/>   </div>

            <Card body>
              <CardBody>
                <CardTitle className="titleText">Your fridge</CardTitle>
                <CardSubtitle className="secondText" >Card subtitle</CardSubtitle>
              <br/>
                <CardText >
              <FridgeComponent/>
                </CardText>
              </CardBody>
            </Card>
   
      </Col>
  
      <Col sm ="4">
            <Card >
              <CardBody>
                <CardTitle className="titleText">Recipe Suggestions</CardTitle>
              </CardBody>
            </Card>
<br/>
<br/>

            <Card >
            <img className="welcomeImg" width="100%" src={recipe1} alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle className="ingredCardTitle">Chicken Carbonara</CardTitle>
         
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardImgOverlay>
            </Card>
<br/>
<br/>

              <Card>
              <CardImg className="welcomeImg" width="100%" src={recipe2} alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle className="ingredCardTitle">Char-Grilled Beef Tenderloin with Three-Herb Chimichurri</CardTitle>
         
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardImgOverlay>
              </Card>
              </Col> 
              </Row>
   </Col> 

</div>
      


            <br/>
     
  <Footer />
          </div>
       );
    }
  }
  
  const bgimg1 = require('../Assets/images/bg2.jpg');
  const divStyle = {
    width: '100%',
    height: 'auto',
    backgroundImage: `url(${bgimg1})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'top', 
    backgroundAttachment: 'fixed'
  };
  
  
 

export default ProfileWelcome;