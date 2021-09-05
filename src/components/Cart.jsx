import React from "react";
import { useCart, useDispatchCart } from "../context/cartContext";

const CartItem = ({ product, index, handleRemove }) => {
  return (
    <article>
      <div className="dt w-100 bb b--black-10 pb2 mt2 dim blue" href="#0">
        <div className="dtc w3">
          <img src={product.pictureUrl} className="img-fluid" />
        </div>
        <div className="dtc v-top pl2">
          <h1 className="f6 f5-ns fw6 lh-title black mv0">{product.title}</h1>
          <h2 className="f6 fw4 mt2 mb0 black-60">{product.description}</h2>
          <dl className="mt2 f6">
            <dt className="clip">Precio</dt>
            <dd className="ml0">
              {product.price.toLocaleString("en", {
                style: "currency",
                currency: "ARS"
              })}
            </dd>
          </dl>
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