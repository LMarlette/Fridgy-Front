import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../Components/headerComponent/header';
import './pages.css'; 
import { Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle, NavLink,FormGroup,Label,Input,Button, ButtonGroup, Row,Col,Container } from 'reactstrap';
import Footer from '../Components/footerComponent/footer';
import axios from 'axios';



 class RecipeDisplay extends Component {
  componentDidMount() {
    const { match: { params } } = this.props;
    const recipeId = params.recipeId;
    axios.get('/recipes/recipeDetail', {
      params: {
        recipeId: recipeId,
      }
    })
    .then((response) => {
      console.log('RECIPE')
      console.log(response.data.res);
      this.setState({
        recipe: response.data.res
      })
    })
    .catch((error) => {
      alert(`Error getting recipe detail: \n${error}`);
    });
    this.setState({
      recipeID: params.recipeId,
    })
    
  }

  constructor(props) {
  super(props);
    this.state = {
      recipeID: '',
      recipe: {},
    };
  }

  render() {

    const bgimg1 = require('../Assets/images/bg3.jpg');
    const divStyle = {
      width: '100%',
      height: '100%',
      backgroundImage: `url(${bgimg1})`,
      backgroundSize: 'cover'  
    };
    return (
      <div className="cComponent" style={divStyle} >
        <br/>
        <div className='homePad'>
          <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <Card body className="text-center transparentBG" inverse style={{borderColor: 'white' }}> 
                <CardTitle>
                  <div className="titleText">{this.state.recipe.title}</div></CardTitle>
                    <CardText>
                      <div className="secondText">
                      <br/>
                      <br/>
                      RECIPE:
                      {JSON.stringify(this.state.recipe,null,2)}
                      </div>
                      <br/>
                    </CardText>
                    <br/>
                  <div>
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

export default RecipeDisplay;
