 import React, { Component } from 'react';
 //import ReactDOM from 'react-dom';
 import { SocialIcon } from 'react-social-icons';

import '../../App.css';
 import 'bootstrap/dist/css/bootstrap.css';
 import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

  import './footer.css';
  //import logo from  '../../Assets/images/fridgy-logo.svg';

class Footer extends Component {
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
         <footer className="footer">
         <br />
      

         <Navbar color="light" light expand="md">
        
         {/* <img src={logo} className="footerLoginLogo" alt="WhyCS Logo" /> */}

          <NavbarBrand href="/" className='navbarText'>Fridgy</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
           
            </Nav>
          </Collapse>
          <SocialIcon url="http://instagram.com/fridyAppTechPrep" color="grey" style={{ height: 30, width: 30 }}/> &nbsp;&nbsp;
          <SocialIcon url="http://twitter.com/fridgyAppTechPrep" color="grey" style={{ height: 30, width: 30 }}/> &nbsp;&nbsp;
          <SocialIcon url="http://facebook.com/fidgyApp" color="grey" style={{ height: 30, width: 30 }}/> &nbsp;&nbsp;
          <SocialIcon network="email" color="grey" style={{ height: 30, width: 30 }}/> &nbsp;&nbsp;

        </Navbar>
         </footer>
     );
  }
}

export default Footer;
