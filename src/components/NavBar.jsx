import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget'
import { HashLink as Link } from "react-router-hash-link"
import imgLogo from '../img/iboxlogo.png'
import Menu from './Menu'
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { getData } from '../firebase'

function NavBar(){
    const [categories, setCategories] = useState([])

    useEffect(() =>{
        async function fetchData(){
        try {
            const categoriesCollection = collection(getData(), 'categories')
            const categoriesSnapshot = await getDocs(categoriesCollection);
            const categoriesList = categoriesSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
            setCategories(categoriesList);
        } catch (error){
            console.log("error")
        }
    }
    fetchData()
    }, [])


    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">
                    <img
                    alt="Logo de Infinity-Box"
                    src={imgLogo}
                    width="60"
                    height="60"
                    className="d-inline-block"
                    />{' '}
                Infinity-Box
                </Navbar.Brand>
                <Nav className="justify-content-end">
                    <Menu categories={categories} />
                    <Nav.Link as={Link} to="/about#aboutLink">Nosotros</Nav.Link>
                    <Nav.Link as={Link} to="/contact#contactLink">Contacto</Nav.Link>
                    <Nav.Link as={Link} to="/cart"><CartWidget /></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default NavBar
