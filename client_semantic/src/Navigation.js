import React from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class SidebarTopPush extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
        <Button onClick={this.toggleVisibility}>MinionHub</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' direction='top' visible={visible} inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='minions'>
              
              Minions
            </Menu.Item>
            <Menu.Item name='add-minion'>
             
              Add Minion
            </Menu.Item>
          </Sidebar>
        </Sidebar.Pushable>
      </div>
    )
  }
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
