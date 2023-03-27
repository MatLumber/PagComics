import React, {useState, useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, ListGroup, Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import '../css/pdf.css'
import Template from "../Elementos/TemplateComic"

function SupermanDark(){
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    return(
        <div className="Container" onLoad={scrollToTop}>
            <Template LinkComics="https://drive.google.com/file/d/1JlNSBAzHktqj2LO2n6lD6xpsr8UuCNcU/preview" tituloComic="Superman: El lado oscuro"/>
        </div>
    )
}

export default SupermanDark;