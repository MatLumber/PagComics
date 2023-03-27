import React, { Component } from 'react'
import { Carousel, ListGroup, Nav, Navbar, Container, NavDropdown, Form} from 'react-bootstrap';
import "./Login.css"
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


function login(){
    return(
        <div className="login">
                <Navbar className="color-auto" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home"><Link to="/"><img src={require('../ImgInicio/logo.png')} width='100%' height='50px'/>{' '}</Link></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/">Inicio</Link></Nav.Link>
                        <Nav.Link><Link to="/Comics">Comics</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link><i class="fa-solid fa-heart fa-xl"></i></Nav.Link>
                        <Nav.Link><Link to="#">Iniciar sesión</Link></Nav.Link>
                        <Nav.Link><Link to="/Registrar">Registrarse</Link></Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
                <div className="formLogin">
                    <div className="contenedor-form">
                        <Form>
                            <h3>Iniciar sesión</h3>
                            <div className="mb-3">
                            <label>Correo electronico</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Introduce tu correo"
                            />
                            </div>
                            <div className="mb-3">
                            <label>Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Introduce tu contraseña"
                            />
                            </div>
                            <div className="mb-3">
                            <div className="custom-control custom-checkbox">
                                <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                                />
                                <label className="custom-control-label" htmlFor="customCheck1">
                                Recuerdame
                                </label>
                            </div>
                            </div>
                            <div className="d-grid">
                            <button type="submit" className="btn btn-primary">
                                Ingresar
                            </button>
                            </div>
                            <p className="forgot-password text-right">
                            Olvide mi <a href="#">contraseña</a>
                            </p>
                        </Form>
                    </div> 
                </div>
            </div>
    );
}

export default login;