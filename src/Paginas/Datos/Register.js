import React, { Component } from 'react'
import { Carousel, ListGroup, Nav, Navbar, Container, NavDropdown, Form} from 'react-bootstrap';
import "./Register.css"
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function Register(){
    return(
        <div className="Registrar">
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
                        <Nav.Link><Link to="#">Registrarse</Link></Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
                <div className="register-form">
                    <div className='container-registrar'>
                        <form>
                        <h3>Registrarse</h3>
                        <div className="mb-3">
                        <label>Nombre de usuario</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Introduce tu nombre de usuario"
                        />
                        </div>
                        <div className="mb-3">
                        <label>Correo electronico</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Introduce tu correo electronico"
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
                        <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            Registrar
                        </button>
                        </div>
                        <p className="forgot-password text-right">
                        Ya estas registrado? <Link to="/Login">iniciar sesión</Link>
                        </p>
                </form>
                </div>
                </div>
            
        </div>
    );
}

export default Register;