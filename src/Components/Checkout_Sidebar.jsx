import { FaTimes } from "react-icons/fa"

function Checkout_Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-card">
        <header className="sidebar-header">
          <h1 className="logo">Summary</h1>
          <button className="sidebar-close_btn">
            <FaTimes />
          </button>
        </header>
        <div className="summary-flex subtotal">
          <div className="subtotal-text">
            <h2>Subtotal - 2 items</h2>
          </div>
          <div className="subtotal-price">
            <h3>$ 635</h3>
          </div>
        </div>
        <div className="promo-code">
          <input type="text" name="promo" id="promo" />
          <button className="promoBtn">Apply</button>
        </div>
        <div className="summary-flex total">
          <div className="total-text">
            <h2>Order Total</h2>
          </div>
          <div className="total-price">
            <h3>$ 635</h3>
          </div>
        </div>
        <button className="checkoutBtn">Checkout</button>
      </div>
    </aside>
  )
}

export default Checkout_Sidebar
