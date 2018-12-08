import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../Components/headerComponent/header';
import './pages.css'; 
import { Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle, NavLink,FormGroup,Label,Input,Button, ButtonGroup, Row,Col,Container } from 'reactstrap';
import Footer from '../Components/footerComponent/footer';
import axios from 'axios';

 class RecipeSearch extends Component {
  componentWillMount() {
    // fires immediately before the initial render
    axios.get('/recipes/recipesByMissing')
    .then((response) => {
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
              <Link to={`/recipe/${recipe.id}`}>
                <h2>{recipe.title}</h2>
                <img src={recipe.image} alt="Missing Img"/>
                <p>Used Ingredients ({recipe.usedIngredientCount})</p>
                  {recipe.usedIngredients.map((usedIng) =>{
                    return <p>{usedIng.name}</p>
                  })}
                <p>Needed Ingredients ({recipe.missedIngredientCount})</p>
                  {recipe.missedIngredients.map((neededIng) =>{
                    return <p>{neededIng.name}</p>
                  })}
              </Link >
            </div>});
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
