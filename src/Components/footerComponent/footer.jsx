import React, { Component } from 'react';

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
  DropdownItem,
FormGroup,
FormControl,
Form, 
Input,
Button} from 'reactstrap';
import { SocialIcon } from 'react-social-icons';
import { Label,Col } from 'react-bootstrap';






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


<div>
        
        
<Navbar color="light" light expand="md">

              <Nav navbar >
                
              <NavItem> 
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/profile">Terms of Use</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/recipeSearch">Privacy</NavLink>
              </NavItem>
              </Nav>

              <Nav className="ml-auto"navbar>

          <NavItem>
           <NavLink> <Button>Subcribe</Button> </NavLink>
           </NavItem>
            <NavItem>
                    <FormGroup>
                    <NavLink>    <Col sm={10}>    <Input type="email" name="email" id="exampleEmail" placeholder="Email" />    </Col> </NavLink>
                    </FormGroup>
           </NavItem>
       

            </Nav>

          <Nav className= "ml-auto" navbar >
              <NavItem>
              <NavLink><SocialIcon url="" network="twitter" /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><SocialIcon url="" network="instagram" /></NavLink>
            </NavItem>
            <NavItem>
             <NavLink><SocialIcon url="" network="facebook" /> </NavLink>
            </NavItem>
            <NavItem>
            <NavLink><SocialIcon url="" network="github" /> </NavLink>
            </NavItem>
          </Nav>


  </Navbar>
</div>

  



     );
  }
}




export default Footer;

