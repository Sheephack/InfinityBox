import React from "react";
import { useCart, useDispatchCart } from "../context/cartContext";
import Button from 'react-bootstrap/Button'
import { HashLink as Link } from "react-router-hash-link"
import Checkout from "./Checkout";
import { FaRegTrashAlt } from 'react-icons/fa'

const CartItem = ({ product, index, handleRemove }) => {
  const itemsFullPrice = product.price * product.quantity
  return (
    <article className="inCartItem">
      <div className="inCartItem_container">
        <div className="inCartItemImgContainer">
          <img src={product.pictureUrl} className="img-fluid" alt={`imagen de ${product.title}`}/>
        </div>
        <div className="inCartItem_container_text">
          <h3>{product.title}</h3>
          <p>
            <span>
              {itemsFullPrice.toLocaleString("en", {
                style: "currency",
                currency: "ARS"
              })}
            </span>
          </p>
        </div>
      </div>
          <Button variant="danger" onClick={() => handleRemove(index)}><FaRegTrashAlt/></Button>
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