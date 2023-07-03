import { useEffect } from "react"
import Cart from "./Components/Cart"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"

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
      <Cart />
      <Footer />
    </>
  )
}

export default App
