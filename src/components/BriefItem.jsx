import Button from 'react-bootstrap/Button'
import { FaRegTrashAlt } from 'react-icons/fa'

function BriefItem ({ product, index, handleRemove }) {
    const itemsFullPrice = product.price * product.quantity
    return (
      <article className="inBriefItem">
        <div className="inBriefItem_container">
          <div className="inBriefItemImgContainer">
            <img src={product.pictureUrl} alt={`imagen de ${product.title}`}/>
          </div>
          <div className="inBriefItem_container_text">
            <h5>{product.title}</h5>
            <p>
              <span>
                {itemsFullPrice.toLocaleString("en", {
                  style: "currency",
                  currency: "ARS"
                })}
              </span><br />
              Cantidad: {product.quantity}
            </p>
          </div>
        </div>
            <Button variant="danger" onClick={() => handleRemove(index)}><FaRegTrashAlt/></Button>
      </article>
    );
  };

export default BriefItem