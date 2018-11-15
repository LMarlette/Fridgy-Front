import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Navigation from './pages/navigation';
import About from './pages/about';
import Contact from './pages/contact';
import Login from './pages/login';
import Profile from './pages/profile';
import ProfileWelcome from './pages/profileWelcome';
import RecipeSearch from './pages/recipeSearch';
import SignUp from './pages/signup';
import Error from './pages/error';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        < Navigation />
        <Switch>
          <Route path='/' component={SignUp} exact/>
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/login' component={Login} />
          <Route path='/profile' component={Profile} />
          <Route path='/profilewelcome' component={ProfileWelcome} />
          <Route path='/recipesearch' component={RecipeSearch} />
          <Route path='/signup' component={SignUp} />
          <Route component={Error} />
        </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
