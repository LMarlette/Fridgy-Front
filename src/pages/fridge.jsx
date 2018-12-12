import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HeaderLogin from '../Components/headerComponent/headerLogin';
import './pages.css'; 
import { Card, CardImgOverlay, CardImg, Row,Col, Button } from 'reactstrap';
import Footer from '../Components/footerComponent/footer';
import axios from 'axios';
import _ from 'lodash';
import wood from '../Assets/images/wood.jpg'

var localInstance = axios.create({
  baseURL: 'http://localhost:8000/api', 
  headers: {
    "Accept": "application/json",
   // "Access-Control-Allow-Origin": "*",
    //'Authorization': 'Bearer '+ USER_TOKEN
  
  }
});


 class Fridge extends Component {
  constructor(props) {
    super(props);
    this.handleValidSubmit = this.handleValidSubmit.bind(this)

    this.state = {
      ingredients: [],
      ingredients1: [],
      ingredients2: []
    }
  }


    // some other file
    componentWillMount() {
     
     localInstance.get('/user/ingredients')
    .then(response => {  
            //alert(JSON.stringify(response));  
        const ingredients = response.data.ingredients
        this.setState({ingredients})
        //alert(ingredients);
        var split = _.ceil(ingredients.length / 2);
        var splitIngredirents = _.chunk(ingredients, split);
    this.setState ({
      ingredients1: splitIngredirents[0],
      ingredients2: splitIngredirents[1],
    })
    //alert(JSON.stringify(this.state.ingredients1));
    //alert(JSON.stringify(this.state.ingredients2));

     
 
    })
    .catch((error) => {
      alert(`Error querying for recipes: \n${error}`);
    });

    
    
      

  }

    
  handleValidSubmit(event, values) {
    event.preventDefault()
   this.setState({ 
     fireRedirect: true, values })
   localStorage.setItem('inputs', JSON.stringify(values));
      }


    

  render() {

    //var { ingredients } = this.state.ingredients;
    const Ingred1 = this.state.ingredients1.map((ingredient) => {

      var date = formatDate(ingredient.createdAt)
      return <div class='text'>
              <Card body className="text-center recipeCard" inverse style={{borderColor: 'white' }}> 
                
                  <CardImg top width="100%" src={wood}  alt="Missing Img"/>
                  <CardImgOverlay>
                  <br/>
                  <br/>
                  <h2 className="ingredCardTitle">{ingredient.ingredientName.toUpperCase()}</h2>
                 <br />
                 <div className='ingCard'>
            <small className="ingTextColor">You bought this item on: {date} </small>
          </div>
                 <Button>Delete</Button>
                </CardImgOverlay>
              </Card>
            </div>});


const Ingred2 = this.state.ingredients2.map((ingredient) => {
  var date = formatDate(ingredient.createdAt)

  var ingredTest = ingredient.ingredientName;
  return <div class='text'>
          <Card body className="text-center recipeCard" inverse style={{borderColor: 'white' }}> 
            
              <CardImg top width="100%" src={wood}  alt="Missing Img"/>
              <CardImgOverlay>
                  <br/>
                  <br/>
              <h2 className="ingredCardTitle">{ingredTest.toUpperCase()}</h2>
             <br />
             <div className='ingCard'>
        <small className="ingTextColor">You bought this item on: {date} </small>
              </div>
            </CardImgOverlay>
          </Card>
        </div>});


    return (
     <div style={divStyle} >

    <HeaderLogin />

    <br />
    <Col sm="12" md={{ size: 8, offset: 2 }} >
         <h1 className="fridgeTitle">YOUR INVENTORY </h1>
            </Col>
   
          
            <div className='homePad'>
          <Row>
            <Col sm="12" md={{ size: 10, offset: 1 }}>
              
                  <Row>
                    <Col sm="2"></Col>
                    <Col sm="4"> <div>{Ingred1}</div></Col>
                    <Col sm="4"> <div>{Ingred2}</div></Col>

                    <Col sm="2"></Col>
                  </Row>
              
            </Col>
          </Row>
        </div>
          
          
          
          <br />
          <br />
          <br />
          <br />
          
          {/* <Button className='btn' outline color="secondary">Start Quiz</Button>     */}
 
        <Footer/>

        </div>
     );
  }
}

function formatDate(date) {
	var d = new Date(date),
		month = d.getMonth(),
		date = d.getDate(),
		year = d.getFullYear()
	 

    month++;

    return (' ' + month + '-' + date +'-' + year);
}


const bgimg4 = require('../Assets/images/bg4.jpg');
const divStyle = {
  width: '100%',
  height: '100%',
  backgroundImage: `url(${bgimg4})`,
  backgroundSize: 'cover'  
};
export default Fridge;