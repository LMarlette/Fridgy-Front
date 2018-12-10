import React, { Component } from 'react';
import HeaderLogin from '../Components/headerComponent/headerLogin';
import { Route, Redirect } from 'react-router';
import axios from 'axios';
 import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  NavLink,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
  Container
} from 'reactstrap'
import Footer from '../Components/footerComponent/footer'


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
    componentDidMount() {
     localInstance.get('/user/ingredients', {})
    .then(response => {    
       //alert(`${JSON.stringify(response)}`);
       //const resp = JSON.stringify(response);
        const ingredients = response.data.ingredients;
        // alert(`INGREDIENTS ${ingredients}`);
        this.setState({ingredients});
       // alert(ingredients[0].id);    
           
    });
  }
//        .catch((error) => {
//         alert(`Error posting \n${error}`);
//                 })
    
  
// }




    

  render() {

    //var { ingredients } = this.state.ingredients;

    return (
         <div>
           <HeaderLogin />


           

{/* <Route exact path="/" render={() => (
  loggedIn ? (
    <Redirect to="/fridge"/>
  ) : (
    <About/>
  )
)}/> */}
    

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