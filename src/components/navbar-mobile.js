import React, { Component } from "react";
import { Link } from "react-scroll";
import './navbar-mobile.css';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";


class NavbarMobile extends Component {
    state = {};
    render(){
            return (
                    <div className="nav-mobile" id="navbar2"> 
                    <Navbar expand="md" className = "navv" variant = "light">
                    <Navbar.Brand href="home" style={{textDecoration: 'none', color: 'white'}}>Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{textDecoration: 'none', color: 'white'}}/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className = "nav-items navbar-default">
                <NavDropdown.Item className="nav-item" id="nav-dropdown">
                <Link
                style={{textDecoration: 'none', color: 'white'}}
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration= {500}
                >About</Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="nav-item" id="nav-dropdown">
                <Link
                style={{textDecoration: 'none', color: 'white'}}
                activeClass="active"
                to="demo-reel"
                spy={true}
                smooth={true}
                offset={-50}
                duration= {500}
                >Demo Reel</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="nav-item" id="nav-dropdown">
                <Link
                style={{textDecoration: 'none', color: 'white'}}
                activeClass="active"
                to="code"
                spy={true}
                smooth={true}
                offset={-50}
                duration= {500}
                >Code</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="nav-item" id="nav-dropdown">
                <Link
                style={{textDecoration: 'none', color: 'white'}}
                activeClass="active"
                to="work3D"
                spy={true}
                smooth={true}
                offset={-50}
                duration= {500}
                >3D Modeling and Animation</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="nav-item" id="nav-dropdown">
                <Link
                style={{textDecoration: 'none', color: 'white'}}
                activeClass="active"
                to="artwork"
                spy={true}
                smooth={true}
                offset={-50}
                duration= {500}
                >Artwork</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="nav-item" id="nav-dropdown">
                <Link
                style={{textDecoration: 'none', color: 'white'}}
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={500}
                duration= {500}
                >Contact</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="nav-item" id="nav-dropdown">
                <Link
                style={{textDecoration: 'none', color: 'white'}}
                >Resume</Link>
                </NavDropdown.Item>
                </Nav>
                </Navbar.Collapse>
                </Navbar>
                </div>
                );
            }
        }

export default NavbarMobile;