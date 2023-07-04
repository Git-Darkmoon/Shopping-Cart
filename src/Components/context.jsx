/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useEffect } from "react"
import reducer from "../reducer"
import {
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  SHOW_DATA,
  REMOVE_ITEM,
  CLEAR_CART,
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
} from "../actions"

const API_URL = "https://www.course-api.com/react-useReducer-cart-project"

const AppContext = createContext()

const initialState = {
  cartInfo: new Map(),
  isSideOpen: false,
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  function increaseQuantity(id) {
    dispatch({ type: INCREASE_QUANTITY, payload: { id } })
  }
  function decreaseQuantity(id) {
    dispatch({ type: DECREASE_QUANTITY, payload: { id } })
  }

  function removeItem(id) {
    dispatch({ type: REMOVE_ITEM, payload: { id } })
  }

  function clearCart() {
    dispatch({ type: CLEAR_CART })
  }

  function openSidebar() {
    dispatch({ type: OPEN_SIDEBAR })
  }
  function closeSidebar() {
    dispatch({ type: CLOSE_SIDEBAR })
  }

  async function fetchData() {
    const response = await fetch(API_URL)
    const cartData = await response.json()

    dispatch({ type: SHOW_DATA, payload: { cartData } })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        fetchData,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
