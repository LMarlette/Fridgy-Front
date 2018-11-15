import React, { Component } from 'react';
//import './App.css';
import './Assets/css/styles.css';
 
 import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

//components
import Header from './Components/headerComponent/header';
import Footer from './Components/footerComponent/footer';
import SignUp from './pages/signup';
import About from './pages/about';



class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
       
       <Header />
       <Route path="/signup" component={SignUp} />
       <Route path="/about" component={About} />

 
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;

