import { useCart, useDispatchCart } from "../context/cartContext";
import BriefItem from './BriefItem'

function Brief(){
    const cartContents = useCart()
    const dispatch = useDispatchCart();
    const subPrice = []
    let totalPrice

    for (const prices of cartContents){
        const finalPrice = prices.price * prices.quantity
        subPrice.push(finalPrice)
        totalPrice = subPrice.reduce((a, b) => a + b)
    }

    const handleRemove = (index) => {
        dispatch({ type: "REMOVE", index });
      };

    return(
        <div className="brief">
            {cartContents.map((item, index) => (
          <BriefItem
            handleRemove={handleRemove}
            key={index}
            product={item}
            index={index}
          />
        ))}
        <p className="totalPrice">
          Precio total:{" "}
          {totalPrice.toLocaleString("en", {
            style: "currency",
            currency: "ARS"
          })}
        </p>
        </div>
    )
}

export default Brief