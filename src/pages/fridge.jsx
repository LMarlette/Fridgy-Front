import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HeaderLogin from '../Components/headerComponent/headerLogin';
import './pages.css'; 
import { Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle, NavLink,FormGroup,Label,Input,Button, ButtonGroup, Row,Col,Container } from 'reactstrap';
import Footer from '../Components/footerComponent/footer';
import axios from 'axios';



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
    this.state = {
      ingredients: []
    }
  }


    // some other file
    componentWillMount() {

     localInstance.get('/user/ingredients')
    .then(response => {  
            alert(JSON.stringify(response));  
        const ingredients = response.data.ingredients
        this.setState({ingredients})
    })
    .catch((error) => {
      alert(`Error querying for recipes: \n${error}`);
    });
  }





    

  render() {

    //var { ingredients } = this.state.ingredients;

    return (
         <div>
           <HeaderLogin />

    

          IM A FRIDGE
            



            
          <Button className='btn' outline color="secondary">Start Quiz</Button>    

            <ul>
          {/* {this.state.ingredients.map(post =>
            <li key={ingredients.id}>{ingredients.ingredientName}</li>
          )} */}
        </ul> 


 
<Footer/>

        </div>
     );
  }
}
const bgimg1 = require('../Assets/images/bg1.jpg');
const divStyle = {
  width: '100%',
  height: '100%',
  backgroundImage: `url(${bgimg1})`,
  backgroundSize: 'cover'  
};
export default Fridge;