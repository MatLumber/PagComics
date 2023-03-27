import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, ListGroup, Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Barra from "../Elementos/Navbar"
import '../css/anime.css'

export function templateAnime({LinkAnime, TituloAnime, TituloCap, DescAnime}){
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    return(
        <div onLoad={scrollToTop}>
            <Barra/>
            <div class="Contenedor">
                <div class="titulo">
                    <h4> <Link to="#">{TituloAnime}</Link>{TituloCap}</h4>
                </div>
                <div class="Video">
                    <iframe width="1280" height="720" src={LinkAnime} title="HxH1" frameborder="" allowfullscreen="true"></iframe>
                </div>
                <div class="Contenedor-info">
                    <h5 id="titulo-info"><Link to="#">{TituloAnime}</Link></h5>
                    <h5 id="sub-info">Episodio 1</h5>
                    <p>{DescAnime}</p>
                </div>
            </div>
            
            <div class="Footer">
            <div class="cont-footer">
                <div id="logo">
                    <img src={require('../ImgInicio/logo.png')} width='200px' height='50px'/>
                </div>
                <div id="texto">
                    <h5>Todo el contenido de INFOCOMICS está protegido bajo derecho de autor. Cualquier uso no autorizado, intercambio o copia será sancionado de acuerdo con las leyes de derecho de autor.</h5>
                </div>
                <div id="politicas">
                    <li>
                        <ul>
                            <a>Términos de Uso</a>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <a>Política de Privacidad</a>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <a>Preguntas Frecuentes</a>
                        </ul>
                    </li>
                </div>
            </div>
        </div>
        </div>
    );
}

export default templateAnime;