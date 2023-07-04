import { FaShoppingCart } from "react-icons/fa"
import { useGlobalContext } from "./context"

function Navbar() {
  const { openSidebar, totalAmount } = useGlobalContext()

  return (
    <nav className="navbar">
      <div className="logo">iTech</div>
      <div className="cartIndicator">
        <FaShoppingCart id="cartIcon" onClick={openSidebar} />
        <span id="cartAmount">{totalAmount}</span>
      </div>
    </nav>
  )
}

export default Navbar
