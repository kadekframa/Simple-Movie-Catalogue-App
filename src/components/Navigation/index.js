import React from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
// import Logo from '../../assets/images/mlaku-logo.png';
import './navigation.css'

const Navigation = () => {
  return (
    <Navbar className='navbar' expand="md"  light>
      <div className='navbar-wrapper'>
        <NavbarBrand href="/">
          {/* <img src={Logo} alt="mlaku-logo" className='brand-logo' /> */}
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck(){}} />
        <Collapse className='collapse-nav' navbar>
          <Nav className="me-auto nav" navbar >
            <div className='menu-wrapper'>
              <NavItem className='item'>
                <NavLink href="/">
                  Home
                </NavLink>
              </NavItem>

              <NavItem className='item'>
                <NavLink href="/now-playing">
                  Now Playing
                </NavLink>
              </NavItem>
              <NavItem className='item'>

                <NavLink href="/upcoming">
                  Upcoming
                </NavLink>
              </NavItem>

              <NavItem className='item'>
                <NavLink href="/popular">
                  Popular
                </NavLink>
              </NavItem>

              <NavItem className='item'>
                <NavLink href="/top-rated">
                  Top Rated
                </NavLink>
              </NavItem>
            </div>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  )
}

export default Navigation;
