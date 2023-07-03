import Product from "./Product"
import { useGlobalContext } from "./context"

function Cart() {
  const { cartInfo } = useGlobalContext()

  const cartArray = Array.from(cartInfo.entries())

  return (
    <main className="cartContainer">
      <h1 className="cartTitle">Your Cart</h1>
      {cartArray.map((product) => {
        const [id, productInfo] = product

        return <Product key={id} {...productInfo} />
      })}
    </main>
  )
}

export default Cart
