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
        <Template LinkComics="https://drive.google.com/file/d/1NdMxYYpaL_EdJ7V7THRZcxNcOg3SW4R3/preview" tituloComic="Invencible"/>
    </div>
    )
}

export default invencible;