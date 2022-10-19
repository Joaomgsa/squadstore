import React, { Component, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import api from "../../services/api";
import ListaPaises from "../../component/Home/Listapaises";


import './Home.css';


function ListItem(props) {
    return(
        <li>{props.value}</li>
    );
}

 function PaisesList(props) {
    const paises = props.paises;
    const listItems = paises.map((pais)=>
        <ListItem key={pais.Token.toString()} value={pais} />
    );
    return(
        <ul>
            {listItems}
        </ul>
    );
} 

const resposta = api;
const paises = resposta.Result;


export default function Home() {


    return(
        <div className="home-text">
            <Container>
            <h2> Copa do Mundo 2022</h2>
            <p>Veja as 32 seleções classificadas</p>
            <ListaPaises/>
            </Container>
        </div>
                
    );
}