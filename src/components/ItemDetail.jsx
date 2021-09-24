import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import Button from "react-bootstrap/Button"
import { useState } from 'react'
import { useCart, useDispatchCart } from '../context/cartContext'
import {useRef} from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import Swal from 'sweetalert2'

function ItemDetail(props){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
        })
    const [disableBtn, setDisableBtn] = useState(false);
    let btnRef = useRef()
    const items = useCart();
    const dispatch = useDispatchCart();
    const addToCart = (item) =>{
        dispatch({ type: "ADD", item })
        setDisableBtn(true)
        Toast.fire({
            icon: 'success',
            title: '¡Cajita añadida al carrito!',
            text: `Podes confirmar tu compra desde el carrito`,
        })
    }
    const handleRemove = index =>{
        dispatch({type: "REMOVE", index})
        setDisableBtn(false);
        Toast.fire({
            icon: 'warning',
            title: 'Cajita removida del carrito',
            text: `Espero puedas añadir mas cajitas pronto :(`,
        })
    }
    const [itemsAdded, setItemsAdded] = useState(0)
    const item = {...props, quantity: itemsAdded}

    return(
        <div className="itemDetailContainer">
            <Card bg='dark' border='warning' text='light' className="card_detail" >
                <Card.Img variant="top" className="card_detail_img" src={props.pictureUrl} />
                <div className="card_detail_details">
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Caja {props.rarity}</Card.Subtitle>
                    <Card.Text>
                    {props.description}
                    </Card.Text>
                </div>
                <div className="card_detail_stock">
                    <p>Precio: ${props.price}</p>
                    <p>Unidades en stock: {props.stock}</p>
                </div>
                <div className="card_detail_return">
                </div>
                <div className="counterContainer">
                <p>Elegi la cantidad de cajitas</p>
                    <ItemCount stock={props.stock} initial={props.initial} onAdd={setItemsAdded} items={itemsAdded} />
                    {itemsAdded > 0 && <Button ref={btnRef} disabled={disableBtn} variant="warning" onClick={() => addToCart(item)} className="addedButtons">Añadir al carrito</Button>}
                    {items.length > 0 && <Button variant="outline-danger" onClick={handleRemove} className="addedButtons"><FaRegTrashAlt/></Button>}
                </div>
            </Card>
            <Button as={Link} to={`/categories/${props.category}#categorySpawn`} variant="outline-warning">Volver al listado de la categoria</Button>
        </div>
    )
}

export default ItemDetail