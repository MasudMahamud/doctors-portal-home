import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';

const NavBar = () => {
    return (
        
        <div className="my-nav">
        <Navbar bg="light"  fixed='top' expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Doctors-Portal</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to="/">Home</Link>                      

                        <Link  to="/dashboard">Dashboard</Link>

                        <Link to="/blog">Blogs</Link>

                        <Link  to="/contract">Contact Us</Link>

                        
                    </Nav>



                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>   
    );
};

export default NavBar;