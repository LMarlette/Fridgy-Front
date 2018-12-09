import React, { Component } from 'react';
import '../../App.css'
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

class HeaderLogin extends Component {
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
<div className='clearfix'>
<img src={logo} className="headerLoginLogo" alt="WhyCS Logo" />

<div className="headerLoginText">FRIDGY</div>  

</div>
  </header>



<div>
  
        <Navbar color="light" className="border border-secondary" light expand="md">
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
                <NavLink href="/fridge">My Fridge</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/recipeSearch">Recipe Search</NavLink>
              </NavItem>
              {/* how do we do the logout */}
              <NavItem>
                <NavLink href="/logout">Recipe Search</NavLink>
              </NavItem>
            </Nav>
          </Collapse>

        </Navbar>
 
      </div>



 </div>
     );
  }
}

export default HeaderLogin;

