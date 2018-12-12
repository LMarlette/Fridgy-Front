import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HeaderLogin from '../Components/headerComponent/headerLogin';
import './pages.css'; 
import { Card, CardImgOverlay, CardImg, Row,Col, Button } from 'reactstrap';
import { AvForm, AvField} from 'availity-reactstrap-validation'
import Footer from '../Components/footerComponent/footer';
import axios from 'axios';
import _ from 'lodash';
import wood from '../Assets/images/wood.jpg'

var localInstance = axios.create({
  baseURL: 'http://localhost:8000/api', 
  headers: {
    "Accept": "application/json",
   //"Access-Control-Allow-Origin": "*",
    //'Authorization': 'Bearer '+ USER_TOKEN
  }
});


 class Fridge extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this)
    this.handleFoodAdd = this.handleFoodAdd.bind(this)
    this.state = {
      shouldUpdate: false,

      ingredients: [],
      ingredients1: [],
      ingredients2: []
    }
  }


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



  checkUpdate(){
    if (this.state.shouldUpdate === true){
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
      })
      .catch((error) => {
        alert(`Error querying for recipes: \n${error}`);
      });   
    }
  }

  handleFoodAdd(event, values) {
    event.preventDefault()
    //event.target.reset();
    document.addForm.reset();

   this.setState({ 
      values })
    const foodItem = this.state.values.foodName;
    //alert(foodItem);
    localInstance.post('/user/ingredientsFromFridge', {
      ingredientString: foodItem 
     })
     .then(res => { 

      this.setState({
        shouldUpdate: true
      })
      this.checkUpdate()
      alert(foodItem + ' added to inventory!');
    })
      .catch((error) => {
        alert(`Error adding ingredient: \n${error}`);
      })
   
    }
  

  handleDelete(event) {
    event.preventDefault()
  const foodID = event.target.id;
  const foodName = event.target.name;
  //alert(foodName);

  //  var config = {headers: {"Content-Type": "application/json;"}}
   
  // alert(foodID + " " + typeof(foodID));
   localInstance.delete('/user/ingredients', { params: {ingredients: [foodID]}})
   .then(res => { 

    this.setState({
      shouldUpdate: true
    })
    this.checkUpdate()
    alert(foodName + ' deleted from inventory!');
  })

    .catch((error) => {
      alert(`Error deleting ingredient: \n${error}`);
    });

    }
    // this.setState({shouldUpdate: true})

    
  render() {

    //var { ingredients } = this.state.ingredients;
    const Ingred1 = this.state.ingredients1.map((ingredient) => {
      var date = formatDate(ingredient.createdAt)
      var foodImg = ingredient.ImgURL
      return <div class='text'>
      
              <Card body className="text-center fridgeCard"> 
                
                  <CardImg className='cardBg' src={wood}  alt="Missing Img"/>
                  <CardImgOverlay>

                    <div><img className='fridgeImg' src={foodImg}></img></div>
                  <br/>
               
                  <div>
                  <h2 className="ingredCardTitle">{ingredient.Name.toUpperCase()}</h2>
                 <br />
                 </div>
                 <div className='ingCard'>
            <small className="ingTextColor">You bought this item on: {date} </small>
          </div>
                 <Button onClick={this.handleDelete} name='delete' id={ingredient.ID} name={ingredient.Name}>Delete</Button>
                </CardImgOverlay>
              </Card>
            </div>});


const Ingred2 = this.state.ingredients2.map((ingredient) => {
  var date = formatDate(ingredient.createdAt)
  var foodImg = ingredient.ImgURL
  //var ingredTest = ingredient.Name;
  return <div class='text'>
            <Card body className="text-center fridgeCard"> 
                
                <CardImg className='cardBg' src={wood}  alt="Missing Img"/>
                <CardImgOverlay>

                  <div><img className='fridgeImg' src={foodImg}></img></div>
                <br/>
             
                <div>
                <h2 className="ingredCardTitle">{ingredient.Name.toUpperCase()}</h2>
               <br />
               </div>
               <div className='ingCard'>
          <small className="ingTextColor">You bought this item on: {date} </small>
        </div>
        <Button onClick={this.handleDelete} name='delete' id={ingredient.ID} name={ingredient.Name}>Delete</Button>
              </CardImgOverlay>
            </Card>
          </div>});



    return (
     <div style={divStyle} >

    <HeaderLogin />

    <br />
    <Col sm="12" md={{ size: 8, offset: 2 }} >
         <h1 className="fridgeTitle">YOUR INVENTORY </h1>
           <br/>
            </Col>
   
           

            <div className='homePad'>
            <br/>
          <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }} >
          <div className='itemAdd'>
          <AvForm className="text-form" name="addForm" onValidSubmit={this.handleFoodAdd}>
            <AvField className="intake-form" name="foodName" id="foodName" label="Add Foods to your inventory" type="text"  errorMessage="Please enter a food item" 
             validate={{
            required: {value: true},
            pattern: {value: '^[A-Za-z0-9 ]+$'},
            minLength: {value: 3},
            maxLength: {value: 25}
          }} />
                    <Button className='fridgeBtn' color="warning" size="lg" >Add Item</Button>      

          </AvForm>
          <br/>
          </div>
            </Col>
            </Row>
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
  backgroundSize: 'cover', 
  backgroundAttachment: 'fixed'
 };
export default Fridge;