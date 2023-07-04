/* eslint-disable react/prop-types */
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { useGlobalContext } from "./context"

function Product({ id, title, price, img, amount }) {
  const { increaseQuantity, decreaseQuantity, removeItem } = useGlobalContext()

  return (
    <article className="product">
      <picture>
        <img id="productImg" src={img} alt="" width={250} height={250} />
      </picture>
      <div className="productInfo">
        <div className="productDesc">
          <h4 className="productRef">Ref: {id.slice(0, 17)} </h4>
          <h1 className="productName">{title}</h1>
          <h2 className="productPrice">$ {price}</h2>
          <button className="productRemove" onClick={() => removeItem(id)}>
            remove
          </button>
        </div>

        <div className="quantity">
          <button
            className="quantityBtn"
            id="decreaseBtn"
            onClick={() => decreaseQuantity(id)}
          >
            <AiOutlineMinus />
          </button>
          <span id="productQuantity">{amount}</span>
          <button
            className="quantityBtn"
            id="increaseBtn"
            onClick={() => increaseQuantity(id)}
          >
            <AiOutlinePlus />
          </button>
        </div>
      </div>
    </article>
  )
}

export default Product
