import React, {useState, useEffect} from 'react';
import Button from "react-bootstrap/Button"

function ItemCount({onAdd, stock, items} , props){
    const [disableUp, setDisableUp] = useState(false);
    const [disableDown, setDisableDown] = useState(true);

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
    },[items, props]);
    
    return(
        <div className="counter">
            <Button variant="outline-warning" disabled={disableDown} onClick={resta}>-</Button>
            <h4 className="counter_count">{items}</h4>
            <Button id="add" disabled={disableUp} variant="outline-warning" onClick={suma}>+</Button>
        </div>
    )
}

export default ItemCount 