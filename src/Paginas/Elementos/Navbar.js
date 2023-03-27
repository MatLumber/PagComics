import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, ListGroup, Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


function Barra(){
    return(
        <div className="Barra">
            <Navbar className="color-auto" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><Link to="/"><img src={require('../ImgInicio/logo.png')} width='100%' height='50px'/>{' '}</Link></Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link><Link to="/">Inicio</Link></Nav.Link>
                <Nav.Link><Link to="/Comics">Comics</Link></Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link><i class="fa-solid fa-heart fa-xl"></i></Nav.Link>
                <Nav.Link><Link to="/Login">Iniciar sesión</Link></Nav.Link>
                <Nav.Link><Link to="/Registrar">Registrarse</Link></Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </div>
    );
}

export default Barra;