import React, { Component } from 'react';
import HeaderLogin from '../Components/headerComponent/headerLogin';
import './pages.css'; 
import { Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle, CardColumns, NavLink,Button, ButtonGroup,Col } from 'reactstrap';
import Footer from '../Components/footerComponent/footer';
import Avacado from '../Assets/images/avacado.jpg'; 

import Axios from 'axios'
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
     
      axios.get('/user/userName')
     .then(response => {  
             //alert(JSON.stringify(response));  
         const userName = response.data.Name
         this.setState({userName})
         //alert(userNAme);
  })
     .catch((error) => {
       alert(`Error querying for username: \n${error}`);
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
  
  const bgimg1 = require('../Assets/images/bg2.jpg');
  const divStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${bgimg1})`,
    backgroundSize: 'cover'  
  };
  
  
 

export default ProfileWelcome;