import React, {useState, useEffect} from 'react';
import Button from "react-bootstrap/Button"
import { CartContext } from '../context/cartContext'

function ItemCount({onAdd, stock, items} , props){
    const [count, setCount] = useState(items);
    const [disableUp, setDisableUp] = useState(false);
    const [disableDown, setDisableDown] = useState(true);
    const [disableStock, setDisableStock] = useState(false);

    const suma = () => {
        if (items < stock){
            onAdd(items +1)
        }
    }
    const resta = () =>{
        if (items <= stock){
            onAdd(items -1)
        }
    }
 
    useEffect(() => {
        if (props.stock === 0){
            setDisableDown(true);
            setDisableUp(true);
            setDisableStock(true);
            
        }
        if (items === props.stock){
            setDisableUp(true)
        }
        if (items < props.stock){
            setDisableUp(false)
        }
        if (items === 0){
            setDisableDown(true)
        }
        if (items >= 1){
            setDisableDown(false)
        }
    },[items]);
    
    return(
        <>
            <h1>Contador: {items}</h1>
            <Button id="add" disabled={disableUp} variant="outline-light" onClick={suma}>Sumar Item</Button>
            <Button variant="outline-light" disabled={disableDown} onClick={resta}>Restar Item</Button> <br />
            
            <div id="countDisplay"></div>
        </>
    )
}

export default ItemCount 