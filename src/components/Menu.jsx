import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from "react-router-dom"

function Menu({ categories }){
    return(
        <NavDropdown title="Categorias" id="basic-nav-dropdown" menuVariant="dark">
            {categories.map((category) => (
               <NavDropdown.Item as={Link} to={`/categories/${category.key}`} key={category.id}>{`${category.description}`}</NavDropdown.Item>
            ))}
            <NavDropdown.Item as={Link} to="/products">Todos los productos</NavDropdown.Item>
        </NavDropdown>
    )
}

export default Menu