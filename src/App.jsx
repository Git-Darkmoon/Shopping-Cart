import { useEffect } from "react"
import Cart from "./Components/Cart"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Checkout_Sidebar from "./Components/Checkout_Sidebar"

function App() {
  useEffect(() => {
    window.addEventListener("blur", () => {
      document.title = "2 products are waiting"
    })
    window.addEventListener("focus", () => {
      document.title = "Shopping Cart"
    })
  })

  return (
    <>
      <Navbar />
      <Checkout_Sidebar />
      <Cart />
      <Footer />
    </>
  )
}

export default App
