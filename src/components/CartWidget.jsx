import { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from '../context/cartContext'
import Badge from 'react-bootstrap/Badge'

function CartWidget(){
    const items = useCart();
    const reducedItems = items.reduce((acc, b) => acc + b.quantity, 0)
    return (
    <>
    <><FiShoppingCart />{reducedItems > 0 && <Badge pill bg="danger" className="spaceInWidget">{reducedItems}</Badge>}</>
    </>
    )}

export default CartWidget