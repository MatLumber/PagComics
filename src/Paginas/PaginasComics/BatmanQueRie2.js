import React, {useState, useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, ListGroup, Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import '../css/pdf.css'
import Template from "../Elementos/TemplateComic"

function BatmanQueRie2(){
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    return(
        <div className="Container" onLoad={scrollToTop}>
            <Template linkComics="https://drive.google.com/file/d/1y4J7xQSq8mKHFAEW9EmENWTmYaS4FqgA/preview" tituloComic="El Batman que ríe #4"/>
        </div>
    )
}

export default BatmanQueRie2;