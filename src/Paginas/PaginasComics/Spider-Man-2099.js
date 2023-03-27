import React, {useState, useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, ListGroup, Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import '../css/pdf.css'
import Template from "../Elementos/TemplateComic"

function SpiderMan2099(){
    return(
        <div>
            <Template LinkComics="https://drive.google.com/file/d/1NfWORxvk0AEIqCjq4NDynnFUjeGcFA3-/preview" tituloComic="Spider-Man 2099 Vol 4 #1" />
        </div>
    )
}

export default SpiderMan2099;