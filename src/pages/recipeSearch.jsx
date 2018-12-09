import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
<<<<<<< HEAD
import Header from '../Components/headerComponent/header';
=======
import HeaderLogin from '../Components/headerComponent/headerLogin';
>>>>>>> 2a7281bb5b298f4d9b50e9f9a5d00f23ac22397b
import './pages.css'; 
import { Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle, NavLink,FormGroup,Label,Input,Button, ButtonGroup, Row,Col,Container } from 'reactstrap';
import Footer from '../Components/footerComponent/footer';

import axios from 'axios';

 class RecipeSearch extends Component {
  componentWillMount() {
    // fires immediately before the initial render
    axios.get('/recipes/recipesByMissing')
    .then((response) => {
<<<<<<< HEAD
=======
      //alert(response);
>>>>>>> 2a7281bb5b298f4d9b50e9f9a5d00f23ac22397b
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
<<<<<<< HEAD
    const recipeFormat = this.state.recipes.map((recipe) => {
      return <div class='text'>
              <Link to={`/recipe/${recipe.id}`}>
                <h2>{recipe.title}</h2>
                <img src={recipe.image} alt="Missing Img"/>
                <p>Used Ingredients ({recipe.usedIngredientCount})</p>
                  {recipe.usedIngredients.map((usedIng) =>{
                    return <p>{usedIng.name}</p>
                  })}
=======

    const recipeFormat = this.state.recipes.map((recipe) => {
      return <div class='text'>
      <Card body className="text-center recipeCard" inverse style={{borderColor: 'white' }}> 
              <Link className="recipeText" to={`/recipe/${recipe.id}`}> 
              <CardImg top width="100%" src={recipe.image}  alt="Missing Img"/>
             
              {/* <img src={recipe.image} alt="Missing Img"/> */}
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
>>>>>>> 2a7281bb5b298f4d9b50e9f9a5d00f23ac22397b
                <p>Needed Ingredients ({recipe.missedIngredientCount})</p>
                  {recipe.missedIngredients.map((neededIng) =>{
                    return <p>{neededIng.name}</p>
                  })}
<<<<<<< HEAD
              </Link >
            </div>});
=======
                  </div>
              </Card>
            </div>});


     
>>>>>>> 2a7281bb5b298f4d9b50e9f9a5d00f23ac22397b
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
<<<<<<< HEAD
    
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
=======

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


 {/* <Col sm="12" md={{ size: 6, offset: 3 }}>
   
   <div>{recipeFormat}</div>
   
   </Col> */}
        </CardText>
       <br/>
 <div>
 </div>
 </CardBody>
</Card>

   </Col>
</Row>
</div>
>>>>>>> 2a7281bb5b298f4d9b50e9f9a5d00f23ac22397b
<Footer />
   </div>


//       <div className="cComponent" style={divStyle} >
//            <br/>

// <div className='homePad'>

//     <Row>
    
//     <Col sm="12" md={{ size: 8, offset: 2 }}>
//     <Card body className="text-center transparentBG" inverse style={{borderColor: 'white' }}> 
//       <CardTitle><div className="titleText">Recipes</div></CardTitle>
//       <CardText>
//       <div className="secondText">Based on your available ingredients 
//       </div>
//       <br/>
//         <div >{recipeFormat}</div>
//             </CardText>
//             <br/>
//       <div>
//       <ButtonGroup>

//       <NavLink href="/signup/1">
//       <Button id="btnL" outline color="secondary">Sign Up</Button>
//       </NavLink>

//        <NavLink href="/login">
//       <Button id="btnR" outline color="secondary">Log In</Button>
//       </NavLink>
//       </ButtonGroup>

//       </div>
//     </Card>

//         </Col>
//   </Row>
//   </div>
// <Footer />
//         </div>
     );
  }
}

export default RecipeSearch;
