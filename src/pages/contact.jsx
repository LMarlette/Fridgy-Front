import React, { Component } from 'react';
import Header from '../Components/headerComponent/header';
import './pages.css'; 
import { Card,CardText,CardTitle,Col } from 'reactstrap';
//import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import Footer from '../Components/footerComponent/footer';

 class Contact extends Component {

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
  
    <Header />

<br/>

  
      
      <Col sm="12" md={{ size: 8, offset: 2 }}>
      <Card body className="text-center transparentBG" inverse style={{borderColor: 'white' }}> 
        <CardTitle><div className="titleText">Contact Us</div></CardTitle>
        <CardText>
        <div className="secondText"> Questions, Comments or Suggestions. We want to hear from you! 
        </div>
    <br/>
          <div className="textCenter">
            <ul class="list-unstyled mb-0">
                <li> 
                <i class="fa fa-map-marker fa-2x purple-text"></i>
                <p> 315 W 36th Street New York, NY 10018, USA</p>
                </li>
                <li>
                <i class="fa fa-phone fa-2x mt-4 purple-text"></i>
                <p>(646) 760-4177</p>
                </li>
                <li>
                <i class="fa fa-envelope fa-2x mt-4 purple-text"></i>
                <p class="mb-0">contact@fridgy.com</p>
                </li>
            </ul>
            </div>
          
              </CardText>
              <br/>
      
      </Card>

          </Col>
          <br/>
   
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


export default Contact;