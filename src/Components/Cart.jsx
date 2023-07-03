import Product from "./Product"
import { useGlobalContext } from "./context"

function Cart() {
  const { cartInfo, clearCart } = useGlobalContext()

  const cartArray = Array.from(cartInfo.entries())

  if (cartArray.length === 0) {
    return <h1 className="emptyTitle shine">Empty Cart</h1>
  }

  return (
    <main className="cartContainer">
      <h1 className="cartTitle">Your Cart</h1>

      {cartArray.map((product) => {
        const [id, productInfo] = product

        return <Product key={id} {...productInfo} />
      })}
      <button className="clearBtn" onClick={clearCart}>
        Clear Cart
      </button>
    </main>
  )
}

export default Cart
