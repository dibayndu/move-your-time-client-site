import React from 'react';
import './Header.css';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user, logOut}=useAuth();
    return (
        <div>
            <Navbar bg="dark" variant={"dark"} expand="lg">
                <Navbar.Brand href="#">Move Your Time</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                    <Nav.Link as={Link} to={"/sevices"}>Services</Nav.Link>
                    <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                </Nav>
                    </Navbar.Collapse>
                    {user?.email ? (
                        <>
                        <Nav.Link style={{color:"white"}} as={Link} to={"/home"}>my orders</Nav.Link>
                        <Nav.Link style={{color:"white"}} as={Link} to={"/home"}>manage all order</Nav.Link>
                        <Nav.Link style={{color:"white"}} as={Link} to={"/home"}>add new service</Nav.Link>
                            <span style={{color: "white", marginRight: "5px"}}>Hello, {user?.displayName} </span> 
                            <Button onClick={logOut} variant="primary">Log Out</Button> 
                        </>
                    ) : 
                    <Nav.Link as={Link} to="/login" className="text-white">Log In</Nav.Link>

}
{/* {
    user?.email?  user.email=="dibayndu818@gmail.com"? 
    <Nav.Link as={Link} to="/login" className="text-white">Log In</Nav.Link>:
    <Nav.Link as={Link} to="/login" className="text-white">Log In</Nav.Link>

} */}
                
            </Navbar>
            
            <div className="container header">
            <h1>Move Your Time</h1>
            <p>Book Your Flight And Travel the world</p>
            </div>
        </div>
    );
};

export default Header;