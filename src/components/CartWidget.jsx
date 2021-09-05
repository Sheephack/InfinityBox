import { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from '../context/cartContext'

function CartWidget(){
    const items = useCart();
    return (
    <>
    <FiShoppingCart />{items.length > 0 && <span>({items.length})</span>}
    </>

    
    )}

export default CartWidget