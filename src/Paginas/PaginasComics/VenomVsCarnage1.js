import React, {useState, useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, ListGroup, Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import '../css/pdf.css'
import Template from "../Elementos/TemplateComic"

function Venomvscarnage(){
    return(
        <div>
            <Template LinkComics="https://drive.google.com/file/d/1KJjO80tdd7Wn2cbYqxvi0T5vAY1kfdBk/preview" tituloComic="Venom Vs Carnage #1"/>
        </div>
    )
}

export default Venomvscarnage;