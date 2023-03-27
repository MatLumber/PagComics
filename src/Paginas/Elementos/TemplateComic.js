import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, ListGroup, Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import '../css/pdf.css'
import Barra from "../Elementos/Navbar"

export function ComicTemplate({LinkComics, tituloComic}){
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    return(
            <div>
                <div className="Container" onLoad={scrollToTop}>
                <Barra/>
            <div className="TituloComic">
                    <h5>{tituloComic}</h5>
                </div>
            <div class="PdfVista">
            
                <iframe src={LinkComics} width="1280" height="950" allow="autoplay"></iframe>
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
    </div>
    );
}

export default ComicTemplate;