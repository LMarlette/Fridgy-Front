import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../Components/headerComponent/header';
import './pages.css'; 
import { Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle, NavLink,FormGroup,Label,Input,Button, ButtonGroup, Row,Col,Container } from 'reactstrap';
import Footer from '../Components/footerComponent/footer';
import axios from 'axios';

 class RecipeDisplay extends Component {
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
      return {id:ingredient.id,
              name:ingredient.name,}
      });
      console.log('RECIPE INGREDIENTS');
      console.log(recipeIngredients);
      this.setState({
        recipe: recipe,
        recipeIngredients: recipeIngredients,
      })
    })
    .catch((error) => {
      alert(`Error getting recipe detail: \n${error}`);
    });
    axios.get('/user/ingredients')
    .then((response) => {
      const ingredients = response.data.ingredients
      const userIngredientsRaw = ingredients;
      const userIngredients = userIngredientsRaw.map((ingredient) => {
      return {id: ingredient.ingredientNum,
              name: ingredient.ingredientName,}
      });
      console.log('USER INGREDIENTS');
      console.log(userIngredients);
      this.setState({
        userIngredients: userIngredients
      })
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
    this.state = {
      recipeID: '',
      recipe: {extendedIngredients:[]},
      recipeIngredients: [],
      userIngredients: [],
      neededIngredients: [],
    };
  }
  handleClick(event){
    console.log('Clicked!');
  }
  render() {
    function findMissing(recipe, user){
      var neededIngredients = [];
      var alreadyHave;
      recipe.forEach((recipeIng) => {
        alreadyHave = false;
        user.forEach((userIng) => {
          if (recipeIng.id == userIng.id) 
            alreadyHave = true;
        })
        if (!alreadyHave) 
          neededIngredients.push(recipeIng)
      })
      return neededIngredients;
    }
    
    // function addIngredients(e){
    //   e.preventDefault();
    //   console.log('Trying to add ingredients');
    //   const neededIngredients = this.state.neededIngredients;
    //   axios.post('/user/ingredient', {
    //     body: {
    //       ingredients: neededIngredients,
    //     }
    //   })
    //   .then((response) => {
    //     const recipe = response.data.res
    //     this.setState({
    //       recipe: recipe
    //     })
    //   })
    // }

    const recipeIngredientNames = this.state.recipeIngredients.map((ingredient) => {
      return <div class='text'>
              <p>{ingredient.name}</p>
             </div>
    });
    const userIngredientNames = this.state.userIngredients.map((ingredient) => {
      return <div class='text'>
              <p>{ingredient.name}</p>
             </div>
    });
    const missingIngredients = findMissing(this.state.recipeIngredients, this.state.userIngredients);
    console.log('NEEDED INGREDIENTS');
    console.log(missingIngredients);
    const missingIngredientNames = missingIngredients.map((ingredient) => {
      return <div class='text'>
              <p>{ingredient.name}</p>
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
        <br/>
        <div className='homePad'>
          <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <Card body className="text-center transparentBG" inverse style={{borderColor: 'white' }}> 
                <CardTitle>
                  <div className="titleText">{this.state.recipe.title}</div></CardTitle>
                    <CardText>
                      <div className="secondText">
                      <button outline color="primary">Add Ingredients</button>{' '}
                      <br/>
                      <p class='text'>Recipe Ingredients</p>
                      {recipeIngredientNames}
                      <p class='text'>User Ingredients</p>
                      {userIngredientNames}
                      <p class='text'>Missing Ingredients</p>
                      {missingIngredientNames}
                      <br/>
                      <p class='text'>{JSON.stringify(this.state.recipeIngredients,null,2)}</p>
                    
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
