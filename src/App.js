import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';

//import Navigation from './pages/navigation';
import About from './pages/about';
import Contact from './pages/contact';
import Login from './pages/login';
import Profile from './pages/profile';
import ProfileWelcome from './pages/profileWelcome';
import RecipeSearch from './pages/recipeSearch';
import RecipeDisplay from './pages/recipeDisplay';
import Error from './pages/error';
import Fridge from './pages/fridge';
import SignUp2 from './pages/signup2';
import SignUp from './pages/signup1';


class App extends Component {
  render() {
    return (  
      <Router>
        <div>
         <Switch>
          <Route path='/' globalState={this.state} createSetGlobalState={this.createSetGlobalState} component={About} exact/>
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/login' component={Login} />
          <Route path='/profile' component={Profile} />
          <Route path='/profilewelcome' component={ProfileWelcome} />
          <Route path='/recipesearch' component={RecipeSearch} />
          <Route path='/recipe/:recipeId' component={RecipeDisplay} />
          {/* <Route path='/signup' component={SignUp} /> */}
          <Route path='/fridge' component={Fridge} />
          <Route path='/signup/2' component={SignUp2} />
          <Route path='/signup/1' component={SignUp} />
          <Route component={About} /> {/* If an unknown route is called redirect to About*/}
        

          {/*
          this wont work and its annoying
          <Route path='signup' render={() => (
            <Redirect to='/signup/1' />
              )} />  */}
          <Route component={Error} />
        </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;
