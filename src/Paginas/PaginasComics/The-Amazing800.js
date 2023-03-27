import React, {useState, useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, ListGroup, Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import '../css/pdf.css'
import Barra from "../Elementos/Navbar"
import Template from "../Elementos/TemplateComic"


function invencible(){
    return(
    <div>
        <Template LinkComics="https://drive.google.com/file/d/1E4Iwiiuik93XPRO77E6i19lH-pAhuMm1/preview" tituloComic="The Amazing Spider-Man #801"/>
    </div>
    )
}

export default invencible;