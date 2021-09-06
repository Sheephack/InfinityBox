import React from "react";
import { useCart, useDispatchCart } from "../context/cartContext";
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const CartItem = ({ product, index, handleRemove }) => {
  const itemsFullPrice = product.price * product.quantity
  console.log(itemsFullPrice)
  return (
    <article style={{"color": "white"}}>
      <div>
        <div>
          <img src={product.pictureUrl} className="img-fluid" />
        </div>
        <div>
          <h1>{product.title}</h1>
          <h2>{product.description}</h2>
          <p>
            <span>Precio</span>
            <span>
              {itemsFullPrice.toLocaleString("en", {
                style: "currency",
                currency: "ARS"
              })}
            </span>
          </p>
          <button onClick={() => handleRemove(index)}>Quitar del carrito</button>
        </div>
      </div>
    </article>
  );
};

export default function Store() {
  const items = useCart();
  const dispatch = useDispatchCart();
  const subPrice = []
  let totalPrice

  for (const prices of items){
    const finalPrice = prices.price * prices.quantity
    subPrice.push(finalPrice)
    console.log("precio final", finalPrice)
    console.log("array final", subPrice)
    console.log(totalPrice)
    totalPrice = subPrice.reduce((a, b) => a + b)
  }
  console.log(items)

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };

  if (items.length === 0) {
    return (
      <main style={{"color": "white"}}>
        <p>El carrito esta vacio</p>
        <Button as={Link} variant="outline-light" to={`/products`}>Volver a todos los productos</Button>
      </main>
    );
  }
  return (
    <main style={{"color": "white"}}>
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
    </main>
  );
}