import React,{useState, useEffect} from "react";
import { Container,Table } from "react-bootstrap";
import api from "../../services/api";

export default function ListaPaises(){
    const[paises, setPaises] = useState([]);

      useEffect(()=> {
         function loadPaises(){
                const resposta = api
                const respostapaises = resposta.Result;
                setPaises(respostapaises);
        }
        loadPaises();
      },[])

      return (
        <div>
            <Container>
                <Table size="sm">
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

