import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Menu()
{
    return(
        <div className="App">
            <h1>Dulce Bocado</h1>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Dulce Bocado Pasteleria</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <Nav.Link href="/signup">Registro</Nav.Link>
                    <Nav.Link href="/login">Ingresar</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    );
}

export default Menu;

