import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
// import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';
import CustomLink from './CustomLink';


const Header = () => {
    const user ='arafat'
    const handleSignOut=()=>{}
    return (
        <>
            <Navbar className="navbar" collapseOnSelect expand="lg" sticky="top">
        <Container>
          <Navbar.Brand className='designed' as={Link} to="/">
            <h3>To DO List</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto navbar-link">
           
              <CustomLink className="nav-link fs-6 active"  to="/" >Home</CustomLink>
              <CustomLink className="nav-link fs-6 " to="/alltasks" >All Tasks</CustomLink>
              
              <CustomLink className="nav-link fs-6"  to="/addtask" >Add Task</CustomLink>
             
             
            </Nav>
            <Nav className="navbar-link">
              {user =='arafat' && (
                <>
                  <CustomLink className="nav-link fs-6 " to="/usertask" >Add User Task</CustomLink>
                 
                  
                </>
              )}
            {
                user?(<CustomLink  className="nav-link fs-6  mt-1 ms-2 text-center text-dark fw-bolder border p-1 btn btn-outline-warning "  to='/' onClick={handleSignOut}> Sign out</CustomLink>):(<CustomLink className="nav-link fs-6 "  to='/login'> Log In</CustomLink>)
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </>
    );
};

export default Header;