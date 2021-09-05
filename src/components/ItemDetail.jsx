import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import Button from "react-bootstrap/Button"
import { useState, useContext } from 'react'
import { CartContext, RemoveFromCart } from '../context/cartContext'

function ItemDetail(props){
    const [items, setItems] = useState(0)
    const [cart, setCart] = useContext(CartContext);
    const addToCart = () =>{
        const addedItem = {name: props.title, price: (props.price * items), qty: items};
        setCart(current => [...current, addedItem]);
    }
    const RemoveFromCart = () =>{
        const remove = cart.filter((item) => item.name !== props.title)
        setCart(remove)
    }
    

    return(
        <div style={{display: "flex", justifyContent:"center"}}>
            <Card bg='dark' border='warning' text='light' style={{width:'19rem', flex: "none"}} >
                <Card.Img variant="top" src={props.pictureUrl} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Caja {props.rarity}</Card.Subtitle>
                    <Card.Text>
                    {props.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Precio: ${props.price}</ListGroupItem>
                    <ListGroupItem>Unidades en stock: {props.stock}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link as={Link} to={`/products`}>Volver a todos los productos</Card.Link>
                </Card.Body>
                <Card.Body>
                    <ItemCount stock={props.stock} initial={props.initial} onAdd={setItems} items={items} />
                    {items > 0 && <Button variant="outline-light" onClick={addToCart} >Añadir al carrito y terminar compra</Button>}
                    {cart.length > 0 && <Button variant="outline-light" onClick={RemoveFromCart}>Remover del carrito</Button>}
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail