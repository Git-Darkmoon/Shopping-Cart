import Product from "./Product"

function Cart() {
  return (
    <main className="cartContainer">
      <h1 className="cartTitle">Your Cart</h1>
      <Product />
      <Product />
      <Product />
    </main>
  )
}

export default Cart
