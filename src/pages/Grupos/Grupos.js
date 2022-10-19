import React, {useState, useEffect} from "react";
import { Container, Table } from "react-bootstrap";
import Jogos from "../Jogos";
import api from "../../services/api";
import { isRouteErrorResponse } from "react-router-dom";

export default function Grupos(){
    const[paises, setPaises] = useState([]);

      useEffect(()=> {
         function loadPaises(){
                const resposta = api
                const respostapaises = resposta.Result;
                setPaises(respostapaises);
        }
        loadPaises();
      },[])
    
      const separar = (paises, maximo) => {
        return paises.reduce((acumulador, pais, indice) =>{
            const grupo = Math.floor(indice/maximo);
            acumulador[grupo] = [...(acumulador[grupo] || []), pais];
            return acumulador;
        }, []);

      };

      

     
      
      const novosGrupos = separar(paises, 4);


    const indices = ["#", "País", "Pontos", "Jogos", "Gols Pro", "Gols Contra"];

    return(
        <div>
            <Container>
                <Table size="sm">
                    <thead>
                        <tr>{indices.map( (indice) => <th> {indice}</th>) }</tr>
                    </thead>
                    <tbody>
                       {paises.map(pais =>
                        <tr key={pais.Name}>
                            <td>{pais.Name}</td>
                        </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
            
        </div>
    );
}