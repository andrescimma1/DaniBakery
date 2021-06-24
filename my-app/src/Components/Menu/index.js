import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import '../../App.css';

const Menu = ({ isScrolling }) =>
{
    const toTheTop = () => 
    {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth"});
    }

    return(
        <div className="App">
            <Navbar className={`navbar ${isScrolling > 20 ? "scrolling" : null}`} bg="navbar" variant="dark" onClick={toTheTop}>
                <Navbar.Brand href="/" onClick={toTheTop}>Dulce Bocado Pasteleria</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <Nav.Link href="/products">Productos</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Menu;

