import { FaTimes } from "react-icons/fa"
import { useGlobalContext } from "./context"

function Checkout_Sidebar() {
  const { isSideOpen, closeSidebar, totalAmount, totalCost } =
    useGlobalContext()

  return (
    <div className={`sidebar-overlay ${isSideOpen && "show-sideBar"}`}>
      <aside className="sidebar">
        <form className="sidebar-card">
          <header className="sidebar-header">
            <h1 className="sidebar-title">Summary</h1>
            <button
              type="button"
              className="sidebar-close_btn"
              onClick={closeSidebar}
            >
              <FaTimes />
            </button>
          </header>
          <div className="summary-flex subtotal">
            <div className="subtotal-text">
              <h2>Subtotal - {totalAmount} items</h2>
            </div>
            <div className="subtotal-price summary-price">
              <h3>${totalCost.toFixed(2)}</h3>
            </div>
          </div>
          <div className="shipping">
            <h3>Shipping Price</h3>
            <h2>{totalAmount > 0 ? "$25.99" : "no items to ship"}</h2>
          </div>
          <div className="summary-flex total">
            <div className="total-text">
              <h2>Order Total</h2>
            </div>
            <div className="total-price summary-price">
              <h3>
                {totalAmount > 0 ? `$${(totalCost + 25.99).toFixed(2)}` : "$0"}
              </h3>
            </div>
          </div>
          <button className="checkoutBtn">Checkout</button>
        </form>
      </aside>
    </div>
  )
}

export default Checkout_Sidebar
