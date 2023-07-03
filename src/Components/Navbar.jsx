import { FaShoppingCart } from "react-icons/fa"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">iTech</div>
      <div className="cartIndicator">
        <FaShoppingCart id="cartIcon" />
        <span id="cartAmount">2</span>
      </div>
    </nav>
  )
}

export default Navbar
