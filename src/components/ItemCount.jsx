import React, {useState, useEffect} from 'react';
import Button from "react-bootstrap/Button"

function ItemCount(props){
    const [count, setCount] = useState(props.initial);
    const [disableUp, setDisableUp] = useState(false);
    const [disableDown, setDisableDown] = useState(true);
    const [disableStock, setDisableStock] =useState(false);
 
    useEffect(() => {
        if (props.stock === 0){
            setDisableDown(true);
            setDisableUp(true);
            setDisableStock(true);
            
        }
        if (count === props.stock){
            setDisableUp(true)
        }
        if (count < props.stock){
            setDisableUp(false)
        }
        if (count === 1){
            setDisableDown(true)
        }
        if (count > 1){
            setDisableDown(false)
        }
    },[count]);
    
    return(
        <>
            <h1>Contador: {count}</h1>
            <Button id="add" disabled={disableUp} variant="outline-light" onClick={() => setCount(count + 1)}>Sumar Item</Button>
            <Button variant="outline-light" disabled={disableDown} onClick={() => setCount(count - 1)}>Restar Item</Button> <br />
            <Button variant="outline-light" disabled={disableStock} onClick={() => console.log("Los objetos son:", count)}>Añadir al carrito</Button>
            <div id="countDisplay"></div>
        </>
    )
}

export default ItemCount 