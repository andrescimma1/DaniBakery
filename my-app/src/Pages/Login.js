import React,{Component} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login()
{
    return(
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Ingrese su email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Ingrese su contraseña</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Iniciar sesión
            </Button>
        </Form>
    );
}

export default Login;