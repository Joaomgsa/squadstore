import React, {useEffect, useState} from "react";
import { Container,Table } from "react-bootstrap";
import api from "../../services/api";




export default function Sorteio(){
      const[paises, setPaises] = useState([]);

      useEffect(()=> {
         function loadPaises(){
                const resposta = api; 
                const respostapaises = resposta.Result;
                setPaises(respostapaises);
        }
        loadPaises();
      },[])


      const indicesGrupos = ["Grupo A", "Grupo B", "Grupo C", "Grupo D", "Grupo E", "Grupo F", "Grupo G", "Grupo H"];
      const cabecalhoTabela = ["Classificaçao", "P","J", "V", "D"];

      function minhaTabela(props) {
        const cabecalho = (
                <thead>
                    <tr>{props.cabecalhoTabela.map((cabecalho) => <th>{cabecalho}</th>)} </tr>
                </thead>
            );

            const corpo = props.paises.map((pais) =>
            <tbody>
            {paises.map(pais => (
                <tr key={pais.Token}>
                    <td>{pais.Name}</td>
                </tr>
            ))}
       </tbody>

            );
            return(
                <Container>
                    <Table>
                        {cabecalho}
                        {corpo}
                    </Table>
                    <a className="outline-primary" href="\grupos">exibir grupos</a>
                </Container>
                
            )
      }
     

    return(
        <div>
            <Container>
                <h2>Grupos - Primeira Fase</h2>
                <Table>
                   <thead>
                        <tr>{cabecalhoTabela.map((cabecalho) =><th>{cabecalho}</th>)}</tr>
                   </thead> 
                   <tbody>
                        {paises.map(pais => (
                            <tr key={pais.Token}>
                                <td>{pais.Name}</td>
                            </tr>
                        ))}
                   </tbody>
                </Table>
                <a className="outline-primary" href="\grupos">exibir grupos</a>
            </Container>

        </div>



        /*<main>
            <ul>
                {paises.map(pais =>(
                    <li key={pais.Token}>{pais.Name}</li>
                    ))}
            </ul>
         </main>*/
    );
}


