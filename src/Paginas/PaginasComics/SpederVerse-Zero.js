import React, {useState, useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, ListGroup, Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import '../css/pdf.css'
import Template from "../Elementos/TemplateComic"

function SpiderverseSuperior(){
    return(
        <div>
            <Template LinkComics="https://drive.google.com/file/d/1Gz5teMHmjNuG6K3SVbYzi020ogDdd5_M/preview" tituloComic="Spider-verse: The superior Spider-Man"/>
        </div>
    )
}

export default SpiderverseSuperior;