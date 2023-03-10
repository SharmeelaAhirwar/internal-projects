import React, { useState } from 'react';
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
  NavbarText,
  toggleNavbar,
  collapsed,
  
} from 'reactstrap';
import { NavLink as ReactLink } from 'react-router-dom';



const CustomNavbar=()=>{
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    return(
      <div>
      <Navbar 
      color="dark"
      fixed=''
      dark='true'
      light='true'
      expand='md'
      >
        <NavbarBrand href="/">My project</NavbarBrand>
        
        
          <Nav className="me-auto" navbar>
            
          <NavItem>
              <NavLink tag={ReactLink}  to="/">
                Home
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink}  to="/login">
                Login
                </NavLink>
            </NavItem>
           
            <NavItem>
              <NavLink tag={ReactLink}  to="/signUp">
               SignUp
              </NavLink>
            </NavItem>
            
            
          </Nav>
          <NavbarText>Simple Text</NavbarText>
         
      </Navbar>
      
    </div>
   
  );

    

}
export default CustomNavbar;