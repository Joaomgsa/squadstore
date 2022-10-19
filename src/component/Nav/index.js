import { Container } from 'react-bootstrap';
import './navbar.css';
import Nav from 'react-bootstrap/Nav';

export default function Navbar() {
  return (
    <div className='navbar-test'>
        <Container>
        <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="/sorteio">Sorteio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="/grupos">Grupos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="/jogos">Jogos Primeira Fase</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="/playoffs">Playoffs</Nav.Link>
            </Nav.Item>
        </Nav>
        </Container>
    </div>
  );
}

 