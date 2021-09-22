import NavDropdown from 'react-bootstrap/NavDropdown'
import { HashLink as Link } from "react-router-hash-link"

function Menu({ categories }){
    return(
        <NavDropdown title="Categorias" id="basic-nav-dropdown" menuVariant="dark">
            {categories.map((category) => (
               <NavDropdown.Item as={Link} to={`/categories/${category.key}#categorySpawn`} key={category.id}>{`${category.description}`}</NavDropdown.Item>
            ))}
            <NavDropdown.Item as={Link} to="/products">Todos los productos</NavDropdown.Item>
        </NavDropdown>
    )
}

export default Menu