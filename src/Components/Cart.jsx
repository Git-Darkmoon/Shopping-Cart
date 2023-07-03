import testImg from "../assets/iPhone14.webp"

function Cart() {
  return (
    <main className="cartContainer">
      <article className="product">
        <picture>
          <img src={testImg} alt="" width={200} height={200} />
        </picture>
        <div className="productInfo">
          <div className="productDesc">
            <h4 className="productRef">Ref: rec1JZlfCIBOPdcT2 </h4>
            <h1 className="productName">iPhone 14 pro</h1>
            <h2 className="productPrice">$ 999</h2>
          </div>

          <div className="quantity">
            <button className="quantityBtn" id="decreaseBtn">
              -
            </button>
            <span id="productQuantity">1</span>
            <button className="quantityBtn" id="increaseBtn">
              +
            </button>
          </div>
        </div>
      </article>
    </main>
  )
}

export default Cart
