import React, { Component } from 'react';
import HeaderLogin from '../Components/headerComponent/headerLogin';
import './pages.css'; 
import { Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle, CardDeck, CardLink, CardImgOverlay, ListGroup, ListGroupItem, Badge, NavLink,FormGroup,Label,Input,Button, ButtonGroup, Row,Col,Container} from 'reactstrap';
//import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import Footer from '../Components/footerComponent/footer';
import Food1 from '/Users/Shruti/Desktop/Fridgy-Front/src/Assets/images/food1.jpg'; 
import Food2 from '/Users/Shruti/Desktop/Fridgy-Front/src/Assets/images/food2.jpg'; 
import BreakFast from '/Users/Shruti/Desktop/Fridgy-Front/src/Assets/images/breakfast.jpg';


 class RecipeSearch extends Component {

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
  
  <HeaderLogin />

<br/>

  <div className='homePad'>

  <CardDeck className="px-4 py-3">
    
            <Card>
              <CardBody>
                <CardTitle className="titleText">Recipe Name</CardTitle>
                <CardSubtitle className="secondText">Food Type & Time </CardSubtitle>
              </CardBody>
              <img width="100%" className="img-card" src={Food1}  alt="Food" />
              <CardBody>
                <CardText className="text">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
                <ListGroup>
                  <ListGroupItem className="justify-content-between">Cras justo odio <Badge pill className="badge-light">1</Badge></ListGroupItem>
                  <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge pill className="badge-light">1</Badge></ListGroupItem>
                  <ListGroupItem className="justify-content-between">Morbi leo risus <Badge pill className="badge-light">1</Badge></ListGroupItem>
                </ListGroup>
            </Card>

            <Card>
              <CardBody>
                <CardTitle className="titleText">Recipe Name</CardTitle>
                <CardSubtitle className="secondText">Food Type & Time </CardSubtitle>
              </CardBody>
              <img width="100%" className="img-card" src={Food2}  alt="Food" />
              <CardBody>
                <CardText className="text">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
                <ListGroup>
                <ListGroupItem className="justify-content-between">Cras justo odio <Badge pill className="badge-light">1</Badge></ListGroupItem>
                <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge pill className="badge-light">1</Badge></ListGroupItem>
                <ListGroupItem className="justify-content-between">Morbi leo risus <Badge pill className="badge-light">1</Badge></ListGroupItem>
                </ListGroup>
            </Card>

            <Card>
              <CardBody>
                <CardTitle className="titleText">Recipe Name</CardTitle>
                <CardSubtitle className="secondText">Food Type & Time </CardSubtitle>
              </CardBody>
              <img width="100%" className="img-card" src={BreakFast}  alt="Food" />
              <CardBody>
                <CardText className="text">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
                <ListGroup>
                  <ListGroupItem className="justify-content-between">Cras justo odio <Badge pill className="badge-light">1</Badge></ListGroupItem>
                  <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge pill className="badge-light">1</Badge></ListGroupItem>
                  <ListGroupItem className="justify-content-between">Morbi leo risus <Badge pill className="badge-light">1</Badge></ListGroupItem>
                </ListGroup>
            </Card>
    </CardDeck>


    <CardDeck className="px-4 py-3">
          <Card>
              <CardBody>
                <CardTitle className="titleText">Recipe Name</CardTitle>
                <CardSubtitle className="secondText">Food Type & Time </CardSubtitle>
              </CardBody>
              <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardText className="text">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
                <ListGroup>
                  <ListGroupItem className="justify-content-between">Cras justo odio <Badge pill className="badge-light">1</Badge></ListGroupItem>
                  <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge pill className="badge-light">1</Badge></ListGroupItem>
                  <ListGroupItem className="justify-content-between">Morbi leo risus <Badge pill className="badge-light">1</Badge></ListGroupItem>
                </ListGroup>
            </Card>
            <Card>
              <CardBody>
                <CardTitle className="titleText">Recipe Name</CardTitle>
                <CardSubtitle className="secondText">Food Type & Time </CardSubtitle>
              </CardBody>
              <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardText className="text">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
                <ListGroup>
                  <ListGroupItem className="justify-content-between">Cras justo odio <Badge pill className="badge-light">1</Badge></ListGroupItem>
                  <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge pill className="badge-light">1</Badge></ListGroupItem>
                  <ListGroupItem className="justify-content-between">Morbi leo risus <Badge pill className="badge-light">1</Badge></ListGroupItem>
                </ListGroup>
            </Card>
            <Card>
              <CardBody>
                <CardTitle className="titleText">Recipe Name</CardTitle>
                <CardSubtitle className="secondText">Food Type & Time </CardSubtitle>
              </CardBody>
              <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardText className="text">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
                <ListGroup>
                    <ListGroupItem className="justify-content-between">Cras justo odio <Badge pill className="badge-light">1</Badge></ListGroupItem>
                    <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge pill className="badge-light">1</Badge></ListGroupItem>
                    <ListGroupItem className="justify-content-between">Morbi leo risus <Badge pill className="badge-light">1</Badge></ListGroupItem>
                </ListGroup>
            </Card>

    </CardDeck>



  </div>


    <br/>
<Footer />
        </div>
     );
  }
}

const bgimg1 = require('../Assets/images/bg4.jpg');
const divStyle = {
  width: '100%',
  height: '100%',
  backgroundImage: `url(${bgimg1})`,
  backgroundSize: 'cover'  
};


export default RecipeSearch;

