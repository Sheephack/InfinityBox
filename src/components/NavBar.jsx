import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget'
import { Link } from "react-router-dom"


function NavBar(){
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">
                    <img
                    alt="Logo de Infinity-Box"
                    src="iboxlogo.png"
                    width="60"
                    height="60"
                    className="d-inline-block"
                    />{' '}
                Infinity-Box
                </Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link as={Link} to="/products">Productos</Nav.Link>
                    <Nav.Link as={Link} to="/about">Nosotros</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
                    <Nav.Link as={Link} to="/cart"><CartWidget /></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default NavBar
