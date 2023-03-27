import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from "react";
import Inicio from "./Paginas/inicio"
import Error404 from "./Paginas/error404"
import Comics from "./Paginas/Comics"
import Anime from "./Paginas/Anime"
import Login from "./Paginas/Datos/Login"
import Registrar from "./Paginas/Datos/Register"
import BatmanQueRie2 from "./Paginas/PaginasComics/BatmanQueRie2"
import Invencible from "./Paginas/PaginasComics/Invencible"
import BatmanUniverso from "./Paginas/PaginasComics/BatmanNuevoUniverso"
import Venomvscarnage1 from "./Paginas/PaginasComics/VenomVsCarnage1"
import SpiderVerseZero from "./Paginas/PaginasComics/SpederVerse-Zero"
import Spiderman2099 from "./Paginas/PaginasComics/Spider-Man-2099"
import Amazing800 from "./Paginas/PaginasComics/The-Amazing800"
import KingInBlack1 from "./Paginas/PaginasComics/KingInBlack1"
import VenomVerse from "./Paginas/PaginasComics/Venomverse"
import BatmmanQueRie6 from "./Paginas/PaginasComics/BatmanQueRie6"
import BatmmanQueRie3 from "./Paginas/PaginasComics/BatmanQueRie3"
import SupermanDark from "./Paginas/PaginasComics/SupermanDark"
import HunterxHunter from "./Paginas/PaginasAnime/HunterxHunter"
import Snk from "./Paginas/PaginasAnime/Snk"
import Kimetsu from "./Paginas/PaginasAnime/Kimetsu"
import Mob from "./Paginas/PaginasAnime/Mob"
import Boku from "./Paginas/PaginasAnime/Boku"
import Onepunch from "./Paginas/PaginasAnime/Onepunch"
import Naruto from "./Paginas/PaginasAnime/Naruto"
import OnePiece from "./Paginas/PaginasAnime/OnePiece"
import Fullmetal from "./Paginas/PaginasAnime/Fullmetal"

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route element={<Inicio/>} path="/"/>
          <Route element={<Comics/>} path="/Comics"/>
          <Route element={<Anime/>} path="/Anime"/>
          <Route element={<Login/>} path="/Login"/>
          <Route element={<Registrar/>} path="/Registrar"/>
          <Route element={<Invencible/>} path="/Invencible"/>
          <Route element={<BatmanQueRie2/>} path="/Batman_que_rie_4"/>
          <Route element={<BatmanUniverso/>} path="/BatmanUniverso"/>
          <Route element={<Venomvscarnage1/>} path="/Venomvscarnage1"/>
          <Route element={<SpiderVerseZero/>} path="/SpiderVerseZero"/>
          <Route element={<Spiderman2099/>} path="/Spiderman2099"/>
          <Route element={<Amazing800/>} path="/Amazing801"/>
          <Route element={<KingInBlack1/>} path="/KingInBlack1"/>
          <Route element={<VenomVerse/>} path="/Venomverse"/>
          <Route element={<BatmmanQueRie6/>} path="/Batman_que_rie_6"/>
          <Route element={<BatmmanQueRie3/>} path="/Batman_que_rie_3"/>
          <Route element={<SupermanDark/>} path="/SupermanDark"/>
          <Route element={<HunterxHunter/>} path="/HunterxHunter"/>
          <Route element={<Snk/>} path="/Snk"/>
          <Route element={<Kimetsu/>} path="/Kimetsu"/>
          <Route element={<Mob/>} path="/Mob"/>
          <Route element={<Boku/>} path="/Boku"/>
          <Route element={<Onepunch/>} path="/OnePunch"/>
          <Route element={<Naruto/>} path="/Naruto"/>
          <Route element={<OnePiece/>} path="/OnePiece"/>
          <Route element={<Fullmetal/>} path="/FullMetal"/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
