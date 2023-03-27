import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, ListGroup, Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import "./css/inicio.css"
import Barra from "./Elementos/Navbar"


function inicio(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        adaptiveHeight:true
      };

      const settingsAnime ={
        dots: true,
        infinite: false,
        speed: 500,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        adaptiveHeight:true
      };

      const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return(
        <div className="Inicio">
        {/* Empezando el NavBar */}
        <Barra/>
        {/* Finalizando el NavBar */}
        <div className="big-carousel">
            <Carousel  variant="dark" fade={true}>
            <Carousel.Item>
            <img src={require('./ImgInicio/SpiderMan.jpg')}/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={require('./ImgInicio/BatmanDc.jpg')}/>
            </Carousel.Item>
            </Carousel>
        </div>
        {/* Sección populares */}
        <div className="grid-items">
            <h2><i class="fa-solid fa-fire"></i> Comics populares</h2>
            <Slider {...settings}>
                <div className="img-slide">
                    <div className="ImgCosas">
                        <div className="top-left">
                            <h3>Cap+</h3>
                        </div>
                        <div className="fade-text">
                            <h5>Aquaman de Peter David #1</h5>
                            <hr></hr>
                            <div className="desc">
                                <h4>Peter David</h4>
                            </div>
                        </div>
                    </div>
                    <Link to="/Invencible"><img src={require('./ImgComics/Invencible.jpg')}/></Link>
                </div>
                <div className="img-slide">
                    <div className="ImgCosas">
                        <div className="top-left">
                            <h3>Cap+</h3>
                        </div>
                        <div className="fade-text">
                            <h5>Batman: Nuevo universo #100</h5>
                            <hr></hr>
                            <div className="desc">
                                <h4>James Tynion IV</h4>
                            </div>
                        </div>
                    </div>
                    <Link to="/BatmanUniverso"><img src={require('./ImgComics/Batman.jpg')}/></Link>
                </div>
                <div className="img-slide">
                    <div className="ImgCosas">
                        <div className="top-left">
                            <h3>Cap+</h3>
                        </div>
                        <div className="fade-text">
                            <h5>Venom Vs Carnage #1</h5>
                            <hr></hr>
                            <div className="desc">
                                <h4>Mark Verheiden</h4>
                            </div>
                        </div>
                    </div>
                    <Link to="/Venomvscarnage1"><img src={require('./ImgComics/VenomVsCarnage1.png')}/></Link>
                </div>
                <div className="img-slide">
                    <div className="ImgCosas">
                        <div className="top-left">
                            <h3>Nuevo</h3>
                        </div>
                        <div className="fade-text">
                            <h5>Spider-Verse: The superior</h5>
                            <hr></hr>
                            <div className="desc">
                                <h4>Dan Slott, Christos Gage</h4>
                            </div>
                        </div>
                    </div>
                    <Link to="/SpiderVerseZero"><img src={require('./ImgComics/SpiderZero.png')}/></Link>
                </div>
                <div className="img-slide">
                    <div className="ImgCosas">
                        <div className="top-left">
                            <h3>Nuevo</h3>
                        </div>
                        <div className="fade-text">
                            <h5>Spider-Man 2099 Vol 4 #1</h5>
                            <hr></hr>
                            <div className="desc">
                                <h4>Nick Spencer</h4>
                            </div>
                        </div>
                    </div>
                    <Link to="/Spiderman2099"><img src={require('./ImgComics/SpidermanV4.jpg')}/></Link>
                </div>
            </Slider>
        </div>
        <div class="comics-war"></div>
        {/* COMIENZO MARVEL */}
        <div className="grid-items">
            <h2><img  src={require('./ImgInicio/logomarvel.png')} width='120px' height='60px'/>{''}</h2>
            <Slider {...settings}>
                <div className="img-slide">
                    <div className="ImgCosas">
                        <div className="top-left">
                            <h3>Cap+</h3>
                        </div>
                        <div className="fade-text">
                            <h5>King in Black Vol 1 #1</h5>
                            <hr></hr>
                            <div className="desc">
                                <h4>Donny Cates</h4>
                            </div>
                        </div>
                    </div>
                    <Link to="/KingInBlack1"><img src={require('./ImgComics/King In Black 1.jpg')}/></Link>
                </div>
                <div className="img-slide">
                    <div className="ImgCosas">
                        <div className="top-left">
                            <h3>Cap+</h3>
                        </div>
                        <div className="fade-text">
                            <h5>The Amazing Spider-Man #801</h5>
                            <hr></hr>
                            <div className="desc">
                                <h4>Dan Slott</h4>
                            </div>
                        </div>
                    </div>
                    <Link to="/Amazing801"><img src={require('./ImgComics/SpidermanAmazing.jpg')}/></Link>
                </div>
                <div className="img-slide">
                    <div className="ImgCosas">
                        <div className="top-left">
                            <h3>Cap+</h3>
                        </div>
                        <div className="fade-text">
                            <h5>Marvel Deluxe: Venomverse</h5>
                            <hr></hr>
                            <div className="desc">
                                <h4>Matthew Rosenberg</h4>
                            </div>
                        </div>
                    </div>
                    <Link to="/Venomverse"><img src={require('./ImgComics/VenomVerse.jpg')}/></Link>
                </div>
                <div className="img-slide">
                    <div className="ImgCosas">
                        <div className="top-left">
                            <h3>Nuevo</h3>
                        </div>
                        <div className="fade-text">
                            <h5>Spider-Verse: The Superior</h5>
                            <hr></hr>
                            <div className="desc">
                                <h4>Dan Slott, Christos Gage</h4>
                            </div>
                        </div>
                    </div>
                   <Link to="/SpiderVerseZero"><img src={require('./ImgComics/SpiderZero.png')}/></Link> 
                </div>
                <div className="img-slide">
                    <div className="ImgCosas">
                        <div className="top-left">
                            <h3>Nuevo</h3>
                        </div>
                        <div className="fade-text">
                            <h5>Spider-Man 2099 Vol 4 #1</h5>
                            <hr></hr>
                            <div className="desc">
                                <h4>Nick Spencer</h4>
                            </div>
                        </div>
                    </div>
                    <Link to="/Spiderman2099"><img src={require('./ImgComics/SpidermanV4.jpg')}/></Link>
                </div>
            </Slider>
        </div>
        {/* COMIENZO DC */}
        <div className="grid-items">
            <h2><img  src={require('./ImgInicio/dc.png')} width='50px' height='50px'/>{''}</h2>
            <Slider {...settings}>
                <div className="img-slide">
                    <div className="ImgCosas">
                        <div className="top-left">
                            <h3>Cap+</h3>
                        </div>
                        <div className="fade-text">
                            <h5>Aquaman de Peter David #1</h5>
                            <hr></hr>
                            <div className="desc">
                                <h4>Peter David</h4>
                            </div>
                        </div>
                    </div>
                    <Link to="/SupermanDark"><img src={require('./ImgComics/SupermanDark.png')}/></Link>
                </div>
                <div className="img-slide">
                    <div className="ImgCosas">
                        <div className="top-left">
                            <h3>Cap+</h3>
                        </div>
                        <div className="fade-text">
                            <h5>Batman: Nuevo universo #100</h5>
                            <hr></hr>
                            <div className="desc">
                                <h4>James Tynion IV</h4>
                            </div>
                        </div>
                    </div>
                    <Link to="/BatmanUniverso"><img src={require('./ImgComics/Batman.jpg')}/></Link>
                </div>
                <div className="img-slide">
                    <div className="ImgCosas">
                        <div className="top-left">
                            <h3>Cap+</h3>
                        </div>
                        <div className="fade-text">
                            <h5>El Batman que ríe #3</h5>
                            <hr></hr>
                            <div className="desc">
                                <h4>Scott Snyder</h4>
                            </div>
                        </div>
                    </div>
                    <Link to="/Batman_que_rie_3"><img src={require('./ImgComics/Batmanquerie3.jpg')}/></Link>
                </div>
                <div className="img-slide">
                    <div className="ImgCosas">
                        <div className="top-left">
                            <h3>Nuevo</h3>
                        </div>
                        <div className="fade-text">
                            <h5>El Batman que ríe #6</h5>
                            <hr></hr>
                            <div className="desc">
                                <h4>Scott Snyder</h4>
                            </div>
                        </div>
                    </div>
                    <Link to="/Batman_que_rie_6"><img src={require('./ImgComics/El Batman Que Rie 5.jpg')}/></Link>
                </div>
                <div className="img-slide">
                    <div className="ImgCosas">
                        <div className="top-left">
                            <h3>Nuevo</h3>
                        </div>
                        <div className="fade-text">
                            <h5>El Batman que ríe #4</h5>
                            <hr></hr>
                            <div className="desc">
                                <h4>Scott Snyder</h4>
                            </div>
                        </div>
                    </div>
                    <Link onClick={scrollToTop} to="/Batman_que_rie_4"><img src={require('./ImgComics/El Batman Que Rie - The Grim Knight.jpg')}/></Link>
                </div>
            </Slider>
        </div>
        <div className="Anime" id="anime">
        <div className="grid-items">
                <h2><i class="fa-solid fa-fire"></i> Anime</h2>
                <Slider {...settingsAnime}>
                    <div className="img-slide">
                        <div className="ImgCosas">
                            <div className="top-left">
                                <h3>Trend</h3>
                            </div>
                            <div className="fade-text">
                                <div id="titulo-anime">
                                    <h5>Hunter X Hunter</h5>
                                </div>
                                <hr></hr>
                                <div className="desc">
                                    <div id="desc-anime">
                                        <h4>Yoshihiro Togashi</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to="/HunterxHunter"><img src={require('./ImgAnimes/Hunter.jpg')}/></Link>
                    </div>
                    <div className="img-slide">
                        <div className="ImgCosas">
                            <div className="top-left">
                                <h3>Final</h3>
                            </div>
                            <div className="fade-text">
                                <div id="titulo-anime">
                                    <h5>Shingeki no Kyojin</h5>
                                </div>
                                <hr></hr>
                                <div className="desc">
                                    <h4>Hajime Isayama</h4>
                                </div>
                            </div>
                        </div>
                        <Link to="/Snk"><img src={require('./ImgAnimes/Snk.jpg')}/></Link>
                    </div>
                    <div className="img-slide">
                        <div className="ImgCosas">
                            <div className="top-left">
                                <h3>Cap+</h3>
                            </div>
                            <div className="fade-text">
                                <div id="titulo-anime">
                                    <h5>Boku no Hīrō</h5>
                                </div>
                                <hr></hr>
                                <div className="desc">
                                    <h4>Kōhei Horikoshi</h4>
                                </div>
                            </div>
                        </div>
                        <Link to="/Boku"><img src={require('./ImgAnimes/HeroAcademia.png')}/></Link>
                    </div>
                    <div className="img-slide">
                        <div className="ImgCosas">
                            <div className="top-left">
                                <h3>Nuevo</h3>
                            </div>
                            <div className="fade-text">
                                <div id="titulo-anime">
                                    <h5>Kimetsu no Yaiba</h5>
                                </div>
                                <hr></hr>
                                <div className="desc">
                                    <h4>Koyoharu Gotouge</h4>
                                </div>
                            </div>
                        </div>
                        <Link to="/Kimetsu"><img src={require('./ImgAnimes/kimetsu.jpg')}/></Link>
                    </div>
                    <div className="img-slide">
                        <div className="ImgCosas">
                            <div className="top-left">
                                <h3>Nuevo</h3>
                            </div>
                            <div className="fade-text">
                                <div id="titulo-anime">
                                    <h5>Mob Psycho 100</h5>
                                </div>
                                <hr></hr>
                                <div className="desc">
                                    <h4>One</h4>
                                </div>
                            </div>
                        </div>
                        <Link to="/Mob"><img src={require('./ImgAnimes/mob.jpg')}/></Link>
                    </div>
                    <div className="img-slide">
                        <div className="ImgCosas">
                            <div className="top-left">
                                <h3>Nuevo</h3>
                            </div>
                            <div className="fade-text">
                                <div id="titulo-anime">
                                    <h5>One Punch Man</h5>
                                </div>
                                <hr></hr>
                                <div className="desc">
                                    <h4>One, Yusuke Murata</h4>
                                </div>
                            </div>
                        </div>
                        <Link to="/OnePunch"><img src={require('./ImgAnimes/OnePunch.png')}/></Link>
                    </div>
                    <div className="img-slide">
                        <div className="ImgCosas">
                            <div className="top-left">
                                <h3>Nuevo</h3>
                            </div>
                            <div className="fade-text">
                                <div id="titulo-anime">
                                    <h5>Naruto</h5>
                                </div>
                                <hr></hr>
                                <div className="desc">
                                    <h4>Masashi Kishimoto</h4>
                                </div>
                            </div>
                        </div>
                        <Link to="/Naruto"><img src={require('./ImgAnimes/Naruto.jpg')}/></Link>
                    </div>
                    <div className="img-slide">
                        <div className="ImgCosas">
                            <div className="top-left">
                                <h3>Nuevo</h3>
                            </div>
                            <div className="fade-text">
                                <div id="titulo-anime">
                                    <h5>One Piece</h5>
                                </div>
                                <hr></hr>
                                <div className="desc">
                                    <h4>Eiichirō Oda</h4>
                                </div>
                            </div>
                        </div>
                        <Link to="/OnePiece"><img src={require('./ImgAnimes/OnePiece.png')}/></Link>
                    </div>
                    <div className="img-slide">
                        <div className="ImgCosas">
                            <div className="top-left">
                                <h3>Nuevo</h3>
                            </div>
                            <div className="fade-text">
                                <div id="titulo-anime-metal">
                                    <h5>Fullmetal Alchemist: Brotherhood</h5>
                                </div>
                                <hr></hr>
                                <div className="desc">
                                    <h4>One, Yusuke Murata</h4>
                                </div>
                            </div>
                        </div>
                        <Link to="/FullMetal"><img src={require('./ImgAnimes/fullmetal.jpg')}/></Link>
                    </div>
                </Slider>
            </div>
        </div>
        <div class="Footer">
            <div class="cont-footer">
                <div id="logo">
                    <img src={require('./ImgInicio/logo.png')} width='200px' height='50px'/>
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

export default inicio;