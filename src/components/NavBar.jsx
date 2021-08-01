import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget'


function NavBar(){
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container fluid>
                <Navbar.Brand href="#home">
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
                    <Nav.Link href="#home">Productos</Nav.Link>
                    <Nav.Link href="#aboutus">Nosotros</Nav.Link>
                    <Nav.Link href="#contact">Contacto</Nav.Link>
                    <Nav.Link href="#cart"><CartWidget /></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default NavBar
