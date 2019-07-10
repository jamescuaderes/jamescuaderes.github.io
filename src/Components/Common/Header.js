import React from 'react';
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
import '../../index.css';


class Header extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <Navbar light expand="lg" className='Navbar'>
          <NavbarBrand href="/">James Cuaderes</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Nav className="ml-auto " navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Resume/">Resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/jamescuaderes/" target="_blank">LinkedIn</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Career/">Career Plans/Interests</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Coursework/">Relevant Coursework</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }

}



export default Header;