/* eslint-disable react/prop-types */
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

function Product({ id, title, price, img, amount }) {
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
          <button className="productRemove">remove</button>
        </div>

        <div className="quantity">
          <button className="quantityBtn" id="decreaseBtn">
            <AiOutlineMinus />
          </button>
          <span id="productQuantity">{amount}</span>
          <button className="quantityBtn" id="increaseBtn">
            <AiOutlinePlus />
          </button>
        </div>
      </div>
    </article>
  )
}

export default Product
