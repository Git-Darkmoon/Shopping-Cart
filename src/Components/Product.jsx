import testImg from "../assets/iPhone14.webp"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

function Product() {
  return (
    <article className="product">
      <picture>
        <img id="productImg" src={testImg} alt="" width={250} height={250} />
      </picture>
      <div className="productInfo">
        <div className="productDesc">
          <h4 className="productRef">Ref: rec1JZlfCIBOPdcT2 </h4>
          <h1 className="productName">iPhone 14 pro</h1>
          <h2 className="productPrice">$ 999</h2>
          <button className="productRemove">remove</button>
        </div>

        <div className="quantity">
          <button className="quantityBtn" id="decreaseBtn">
            <AiOutlineMinus />
          </button>
          <span id="productQuantity">1</span>
          <button className="quantityBtn" id="increaseBtn">
            <AiOutlinePlus />
          </button>
        </div>
      </div>
    </article>
  )
}

export default Product
