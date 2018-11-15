import React, { Component } from 'react';
 import {
     Link
 } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
<header>
<div className="logoText">FRIDGY</div>  

<div className = "toolbar">
<nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-bottom">
<div class="container">

  <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
     
      <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>
       
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
       
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
       
      <li class="nav-item">
        <a class="nav-link" href="#">Recipes</a>
      </li>
       
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    </div>

  </div>
</nav>
</div>

</header>
     );
  }
}

export default Header;

