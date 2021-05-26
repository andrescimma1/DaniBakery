import React,{Component} from "react";
import {Link} from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';
import Option from './Option';

function Menu()
{
    return(
        <div className="App">
            <h1>Dulce Bocado</h1>
            <div class="menu">
                <Option path="/" label="Home"/>
                <Option path="/detail" label="Detalle de producto"/>
                <Option path="/signup" label="Registro"/>
                <Option path="/login" label="Ingresar"/>
            </div>

            
        </div>
    );
}

export default Menu;

