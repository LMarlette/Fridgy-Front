import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HeaderLogin from '../Components/headerComponent/headerLogin';
import './pages.css'; 
import { Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle, NavLink,FormGroup,Label,Input,Button, ButtonGroup, Row,Col,Container } from 'reactstrap';
import Footer from '../Components/footerComponent/footer';

import axios from 'axios';

 class RecipeSearch extends Component {
  componentWillMount() {
    // fires immediately before the initial render
    axios.get('/recipes/recipesByMissing')
    .then((response) => {
      alert(JSON.stringify(response));
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

    const recipeFormat = this.state.recipes.map((recipe) => {
      return <div class='text'>
              <Card body className="text-center recipeCard" inverse style={{borderColor: 'white' }}> 
                <Link to={`/recipe/${recipe.id}`}>
                  <CardImg top width="100%" src={recipe.image}  alt="Missing Img"/>
                  <h2 className="recipeCardTitle">{recipe.title}</h2>
                </Link >
                <br />
                <div className="usedIngred">
                  <p>Ingredients in your Fridge({recipe.usedIngredientCount})</p>
                    {recipe.usedIngredients.map((usedIng) =>{
                      return <p>{usedIng.name}</p>
                    })}
                </div>
                <br/>
                <div className="missIngred">
                  <p>Needed Ingredients ({recipe.missedIngredientCount})</p>
                    {recipe.missedIngredients.map((neededIng) =>{
                      return <p>{neededIng.name}</p>
                    })}
                </div>
              </Card>
            </div>});

    const bgimg1 = require('../Assets/images/bg3.jpg');
    const divStyle = {
      width: '100%',
      height: 'auto',
      backgroundImage: `url(${bgimg1})`,
      backgroundSize: 'contain'  
    };

    return (
      <div className="cComponent" style={divStyle} >
        <HeaderLogin />
        <br/>
        <div className='homePad'>
          <Row>
            <Col sm="12" md={{ size: 10, offset: 1 }}>
              <Card body className="text-center transparentBgRecipe" inverse style={{ }}> 
                <CardBody>
                <CardTitle className="recipeTitle">Recipes</CardTitle>
                <CardText>
                  <div className="recipeText">Based on your available ingredients</div>
                  <br/>
                  <Row>
                    <Col sm="2"></Col>
                    <Col sm="8"> <div>{recipeFormat}</div></Col>
                    <Col sm="2"></Col>
                  </Row>
                </CardText>
                <br/>
                <div>
                </div>
                </CardBody>
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
