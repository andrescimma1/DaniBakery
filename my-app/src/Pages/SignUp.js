import React,{Component} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SignUp()
{
    return(
        <Form>
            <Form.Group controlId="formBasicName">
                <Form.Label>Ingrese su nombre</Form.Label>
                <Form.Control type="name" placeholder="Nombre" />
            </Form.Group>
            <Form.Group controlId="formBasicLastName">
                <Form.Label>Ingrese su apellido</Form.Label>
                <Form.Control type="lastname" placeholder="Apellido" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Ingrese su email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Ingrese una contraseña</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Registrarse
            </Button>
        </Form>
    );
}

export default SignUp;