import React, { Component } from 'react';
import HeaderLogin from '../Components/headerComponent/headerLogin';
import { Route, Redirect } from 'react-router';

 class Fridge extends Component {
  render() {
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

        </div>
     );
  }
}

export default Fridge;