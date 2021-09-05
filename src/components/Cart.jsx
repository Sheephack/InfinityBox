import { useContext } from 'react'
import { CartContext } from '../context/cartContext'


function Cart(){
    const [cart, setCart] = useContext(CartContext)
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
    console.log("longitud", cart.length)
    return(
        <>
        <p style={{"color": "white"}}>Items en carrito {cart.length} </p>
        <p style={{"color": "white"}}>precio total {totalPrice}</p>
        </>
    )
}

export default Cart