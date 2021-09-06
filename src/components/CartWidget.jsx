import { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from '../context/cartContext'

function CartWidget(){
    const items = useCart();
    const reducedItems = items.reduce((acc, b) => acc + b.quantity, 0)
    return (
    <>
    <><FiShoppingCart /><span>({reducedItems})</span></>
    </>

    
    )}

export default CartWidget