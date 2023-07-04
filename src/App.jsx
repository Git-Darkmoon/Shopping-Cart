import { useEffect } from "react"
import Cart from "./Components/Cart"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Checkout_Sidebar from "./Components/Checkout_Sidebar"
import { useGlobalContext } from "./Components/context"

function App() {
  const { totalAmount } = useGlobalContext()

  const tabTitle =
    totalAmount > 0
      ? `${totalAmount} Products Are Waiting 😊`
      : `Go until you buy 😑`

  useEffect(() => {
    window.addEventListener("blur", () => {
      document.title = tabTitle
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
