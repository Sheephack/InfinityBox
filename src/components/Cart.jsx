import React from "react";
import { useCart, useDispatchCart } from "../context/cartContext";
import Button from 'react-bootstrap/Button'
import { HashLink as Link } from "react-router-hash-link"
import Checkout from "./Checkout";
import CartItem from './CartItem'


export default function Store() {
  const items = useCart();
  const dispatch = useDispatchCart();
  const subPrice = []
  let totalPrice

  for (const prices of items){
    const finalPrice = prices.price * prices.quantity
    subPrice.push(finalPrice)
    totalPrice = subPrice.reduce((a, b) => a + b)
  }

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };

  if (items.length === 0) {
    return (
      <main className="cartContainer">
        <div className="cartContainer_info">
        <div className="cartTitle">
          <h2>Mi carrito de compras:</h2>
          <hr />
        </div>
        <p>El carrito esta vacio</p>
        <Button as={Link} variant="warning" to={`/products#categorySpawn`}>Volver a todos los productos</Button>
      </div>
      </main>
    );
  }
  return (
    <main className="cartContainer">
      <div className="cartContainer_info">
        <div className="cartTitle">
          <h2>Mi carrito de compras:</h2>
          <hr />
        </div>
        <p>
          Precio total:{" "}
          {totalPrice.toLocaleString("en", {
            style: "currency",
            currency: "ARS"
          })}
        </p>
        {items.map((item, index) => (
          <CartItem
            handleRemove={handleRemove}
            key={index}
            product={item}
            index={index}
          />
        ))}
        <Checkout placement='end'></Checkout>
      </div>
    </main>
  );
}