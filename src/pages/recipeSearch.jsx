import React, { Component } from 'react';
import Header from '../Components/headerComponent/header';
import './pages.css'; 
import { Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle, NavLink,FormGroup,Label,Input,Button, ButtonGroup, Row,Col,Container } from 'reactstrap';
import Footer from '../Components/footerComponent/footer';
import axios from 'axios';

import { localInstance } from '../config/localInstance';

 class RecipeSearch extends Component {
  componentWillMount() {
    // fires immediately before the initial render
    axios.get('/recipes/recipesByMissing')
    .then((response) => {
      alert(response);
      this.setState({
        recipes: response.data.recipes
      })
    })
    .catch((error) => {
      alert(`Error querying for recipes: \n${error}`);
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      test: 'lalalala',
      recipes: [],
    };
  }

  render() {
    const recipeFormat = this.state.recipes.map((d) => {
      return <div class='text'><h2>{d.title}</h2><img src={d.image} alt="Missing Img"/></div>});
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
      <CardTitle><div className="titleText">Recipes</div></CardTitle>
      <CardText>
      <div className="secondText">Based on your available ingredients 
      </div>
      <br/>
        <div >{recipeFormat}</div>
            </CardText>
            <br/>
      <div>
      <ButtonGroup>

      <NavLink href="/signup/1">
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

export default RecipeSearch;
