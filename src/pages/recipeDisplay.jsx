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
        Amount: ingredient.amount,
        Unit: ingredient.unit,
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
    let buttonAdd;
    let buttonRemove;

    if (!readyToCook) {
      buttonAdd = 
      <div class="btnTextR">
      <br />
      <Button onClick={this.handleAddIngredients} className='fridgeBtn' color="warning" size="lg">Add Ingredients</Button>
      <br />
      <p>Clicking this button will add needed ingredients to your inventory!</p>
      </div>
    }

    if(readyToCook || neededIngredientNames === null){
    buttonRemove = 
    <div class="btnTextR">
          <br />
    <Button onClick={this.handleRemoveIngredients} className='fridgeBtn' color="danger" size="lg">Recipe Completed</Button>
    <br />

    <p>Clicking this button will delete the ingredients used for this recipe from your fridge!</p>
    </div>
  }
    const recipeIngredientNames = this.state.recipeIngredients.map((ingredient) => {
      return <div class='text'>
              <p>{ingredient.Amount}  {ingredient.Unit}  {ingredient.Name}</p>
             </div>
    });
    // const userIngredientNames = this.state.userIngredients.map((ingredient) => {
    //   return <div class='text'>
    //           <p>{ingredient.Name}</p>
    //          </div>
    // });
    const neededIngredientNames = this.state.neededIngredients.map((ingredient) => {
      return <div class='text'>
              <p>{ingredient.Name}</p>
             </div>
    });

    const recipeText = this.state.recipe.instructions;
    const recipeImage = this.state.recipe.image;
    const readyIn = this.state.recipe.readyInMinutes;
     //alert(recipeText);

    const bgimg2 = require('../Assets/images/bg2.jpg');
    const divStyle = {
      width: '100%',
      height: '100%',
      backgroundImage: `url(${bgimg2})`,
      backgroundSize: 'cover', 
      backgroundAttachment: 'fixed'
    };

    return (
      <div className="cComponent" style={divStyle} >
      <HeaderLogin/>
        <br/>
        <div className='homePad'>
          <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <Card body className="text-center transparentBgRecipeDisplay" inverse style={{border: 'none'}}> 
                <CardTitle>
                  <h1 className="recipeCardTitle">{this.state.recipe.title}</h1>
                  <br/>
                  <h3>Recipe Time: About {readyIn} minutes</h3>
                  </CardTitle>
                    <CardText>
                     <div> <img className="recipeDispImg" src={recipeImage}></img></div>
                      <br/> 
                      <div className="secondText">
                      {buttonAdd}
                      <br/>

                      <Row>
                      <Col sm="1"></Col>
                    <Col sm="5" > 
                    <Card body className="text-center fridgeCard"> 
                     <p><b>Recipe Ingredients</b></p>
                      {recipeIngredientNames}
                     </Card>
                    </Col>

                    <Col sm="5" >
                    <Card body className="text-center fridgeCard"> 
                    <p><b>Needed Ingredients</b></p>
                      {neededIngredientNames}  
                      </Card>
                    </Col>
                    <Col sm="1"></Col>
                      </Row>
                       
                       <Row>
                         <Col>
                         <Card className="recipeCText">
                        <br />
                      <h3>Recipe Details</h3>
                      <br />

                      {recipeText} 
                      <br />
                      <br />

                      </Card>              
                        </Col>
                      </Row>
                    
                      <br/>
                      <br/>
                      <br/>
                      {buttonRemove}

                         </div>
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
