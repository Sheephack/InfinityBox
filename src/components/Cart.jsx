import React from "react";
import { useCart, useDispatchCart } from "../context/cartContext";

const CartItem = ({ product, index, handleRemove }) => {
  return (
    <article>
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
              {product.price.toLocaleString("en", {
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
  const totalPrice = items.reduce((total, b) => total + b.price, 0);

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };

  if (items.length === 0) {
    return (
      <main>
        <p>El carrito esta vacio</p>
      </main>
    );
  }
  return (
    <main>
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