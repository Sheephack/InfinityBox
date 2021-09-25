import Button from 'react-bootstrap/Button'
import { FaRegTrashAlt } from 'react-icons/fa'

function CartItem ({ product, index, handleRemove }) {
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

export default CartItem