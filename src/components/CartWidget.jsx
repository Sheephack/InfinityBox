import { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from '../context/cartContext'

function CartWidget(){
    const [cart, setCart] = useContext(CartContext)
    return (
    <>
    <FiShoppingCart />{cart.length > 0 && <span>{cart.length}</span>}
    </>

    
    )}

export default CartWidget