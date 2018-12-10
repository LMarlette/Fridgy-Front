import React, { Component } from 'react';
import '../../App.css';
 import 'bootstrap/dist/css/bootstrap.css';
 import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  import './header.css';
  import logo from  '../../Assets/images/fridgy-logo.svg';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
<div>
 <header>
 
 <img src={logo} className="headerLogo" alt="WhyCS Logo" />

<div className="headerText">FRIDGY</div>  
  </header>
 

<div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/" className='navbarText'>Fridgy</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
           
            </Nav>
          </Collapse>
        </Navbar>
      </div>


 </div>
     );
  }
}

export default Header;

