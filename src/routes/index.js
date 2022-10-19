import {BrowserRouter, Route,Routes} from "react-router-dom";
import Grupos from "../pages/Grupos/Grupos";

import Home from "../pages/Home";
import Jogos from "../pages/Jogos";
import Sorteio from "../pages/Sorteio/Sorteio";
import Playoffs from "../pages/Playoffs/Playoffs";

export default function AllRoutes() {
    return(
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/sorteio" element={<Sorteio/>}/>
                <Route path="/grupos" element={<Grupos/>}/>
                <Route path="/jogos" element={<Jogos/>}/>
                <Route path="/playoffs" element={<Playoffs/>}/>
            </Routes>
    );
}