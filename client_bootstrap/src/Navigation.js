import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { NavLink as RouterNavLink } from 'react-router-dom'

export default class Example extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggleNavbar = this.toggleNavbar.bind(this);
      this.state = {
        collapsed: true
      };
    }
  
    toggleNavbar() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }
    render() {
      return (
        <div>
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto">MinionHub</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                <NavLink tag={RouterNavLink} to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                <NavLink tag={RouterNavLink} to="/minions">Minions</NavLink>
                </NavItem>
                <NavItem>
                <NavLink tag={RouterNavLink} to="/minions/new">Add Minion</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }
