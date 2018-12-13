import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HeaderLogin from '../Components/headerComponent/headerLogin';
import './pages.css'; 
import { Card,CardText,CardTitle,Row,Col,Button } from 'reactstrap';
import Footer from '../Components/footerComponent/footer';
import axios from 'axios';

class RecipeDisplay extends Component {
  getNeeded() {
    var needIngredients = [];
    var alreadyHave;
    this.state.recipeIngredients.forEach((recipeIng) => {
      alreadyHave = false;
      this.state.userIngredients.forEach((userIng) => {
        if (recipeIng.ID === userIng.ID) 
          alreadyHave = true;
      })
      if (!alreadyHave) 
        needIngredients.push(recipeIng)
    })
    this.setState({
      neededIngredients: needIngredients,
    })
  }
  componentWillMount() {
    const { match: { params } } = this.props;
    const recipeId = params.recipeId;
    axios.get('/recipes/recipeDetail', {
      params: {
        recipeId: recipeId,
      }
    })
    .then((response) => {
      const recipe = response.data.res
      const recipeIngredientsRaw = recipe.extendedIngredients;
      const recipeIngredients = recipeIngredientsRaw.map((ingredient) => {
      return {
        ID:ingredient.id,
        Name:ingredient.name,
        Type:ingredient.aisle,
        ImgURL:`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`,
      }
      });
      this.setState({
        recipe: recipe,
        recipeIngredients: recipeIngredients,
      }, this.getNeeded)
    })
    .catch((error) => {
      alert(`Error getting recipe detail: \n${error}`);
    });
    axios.get('/user/ingredients')
    .then((response) => {
      const ingredients = response.data.ingredients
      const userIngredientsRaw = ingredients;
      const userIngredients = userIngredientsRaw.map((ingredient) => {
      return {
        ID: ingredient.ID,
        Name: ingredient.Name,
        Type: ingredient.Type,
        ImgURL: ingredient.ImgURL,
      }
      });
      this.setState({
        userIngredients: userIngredients
      },
      function() { console.log("User setState completed", this.state) })
    })
    .catch((error) => {
      alert(`Error getting user ingredients: \n${error}`);
    });
    this.setState({
      recipeID: recipeId,
    })
  }
  constructor(props) {
  super(props);
  this.handleAddIngredients = this.handleAddIngredients.bind(this);
  this.handleRemoveIngredients = this.handleRemoveIngredients.bind(this);
    this.state = {
      recipeID: '',
      recipe: {extendedIngredients:[]},
      recipeIngredients: [],
      userIngredients: [],
      neededIngredients: [],
      readyToCook: false,
    };
  }
  handleAddIngredients(event, values) {
    event.preventDefault();
    console.log('Trying to add ingredients');
    const neededIngredients = this.state.neededIngredients;
    const userIngredients = this.state.userIngredients;
    const addedIngredients = userIngredients.concat(neededIngredients)
    console.log()
    this.setState({
      userIngredients: addedIngredients,
      readyToCook: true,
    },this.getNeeded);
    axios.post('/user/ingredientsFromRecipe', {
      ingredients: neededIngredients
    }).then((response) => {
      console.log('Items successfully added!');
    }).catch((response) => {
      console.log(`Error adding ingredients\n${response}`);
      })
  }
  handleRemoveIngredients(event, values) {
    event.preventDefault();
    console.log('Trying to remove ingredients');
    let userIngredients = this.state.userIngredients;
    const recipeIngredients = this.state.recipeIngredients
    console.log('Recipe Ingrs');
    console.log(recipeIngredients);
    console.log('Before');
    console.log(userIngredients);
    userIngredients = userIngredients.filter( ( el ) => !recipeIngredients.map((recipeIngr) =>
    { return recipeIngr.ID; }).includes( el.ID ) );
    console.log('After');
    console.log(userIngredients);
    this.setState({
      userIngredients: userIngredients,
      readyToCook: false,
    },this.getNeeded);
    const recipeIngredientIds = recipeIngredients.map((ingred) => {
      return ingred.ID
    })
    axios.delete('/user/ingredients', { params: {ingredients: recipeIngredientIds}}) 
    .then((response) => {
      console.log('Recipe items successfully deleted!');
    }).catch((response) => {
      console.log(`Error deleting recipe ingredients\n${response}`);
      })
  };

  render() {
    const readyToCook = this.state.readyToCook;
    let button;

    if (readyToCook) {
      button = <Button onClick={this.handleRemoveIngredients} outline color="secondary">Recipe Completed</Button>;
    } else {
      button = <Button onClick={this.handleAddIngredients} outline color="primary">Add Ingredients</Button>;
    }

    const recipeIngredientNames = this.state.recipeIngredients.map((ingredient) => {
      return <div class='text'>
              <p>{ingredient.Name}</p>
             </div>
    });
    const userIngredientNames = this.state.userIngredients.map((ingredient) => {
      return <div class='text'>
              <p>{ingredient.Name}</p>
             </div>
    });
    const neededIngredientNames = this.state.neededIngredients.map((ingredient) => {
      return <div class='text'>
              <p>{ingredient.Name}</p>
             </div>
    });

    const bgimg1 = require('../Assets/images/bg3.jpg');
    const divStyle = {
      width: '100%',
      height: '100%',
      backgroundImage: `url(${bgimg1})`,
      backgroundSize: 'cover'  
    };
    return (
      <div className="cComponent" style={divStyle} >
      <HeaderLogin/>
        <br/>
        <div className='homePad'>
          <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <Card body className="text-center transparentBG" inverse style={{borderColor: 'white' }}> 
                <CardTitle>
                  <div className="titleText">{this.state.recipe.title}</div></CardTitle>
                    <CardText>
                      <div className="secondText">
                      {button}
                      <br/>
                      <p class='text'><b>Recipe Ingredients</b></p>
                      {recipeIngredientNames}
                      <p class='text'><b>User Ingredients</b></p>
                      {userIngredientNames}
                      <p class='text'><b>Needed Ingredients</b></p>
                      {neededIngredientNames}                    
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
