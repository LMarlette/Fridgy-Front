import React, { Component } from 'react';
import Header from '../Components/headerComponent/header';
import './pages.css'; 
import { Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle, NavLink,FormGroup,Label,Input,Button, ButtonGroup, Row,Col,Container } from 'reactstrap';
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
        <CardTitle><div className="titleText">Information</div></CardTitle>
        <CardText>
        <div className="secondText">Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt 
        </div>
        <br/>
          <div className="text">Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
           veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex 
           ea comepmodo consetquat.
             <br/>              <br/>

            Sed ut perspiciatis unde omnis iste natus error sit 
            voluptatem accusantium poeyi doloremque laudantium, totam rem aperiam,
             eaque ipsa quae apsb illo inventore veritatis et quasi architecto beiatae 
             vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos 
              qui ratione voluptatem sequi nesciunt.       </div>
              </CardText>
              <br/>
        <div>
        <ButtonGroup>

        <NavLink href="/signup">
        <Button id="btnL" outline color="secondary">Sign Up</Button>
        </NavLink>

         <NavLink href="/login">
        <Button id="btnR" outline color="secondary">Log In</Button>
        </NavLink>
        </ButtonGroup>

        </div>
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
