/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useEffect } from "react"
import reducer from "../reducer"
import { INCREASE_QUANTITY, DECREASE_QUANTITY, SHOW_DATA } from "../actions"

const API_URL = "https://www.course-api.com/react-useReducer-cart-project"

const AppContext = createContext()

const initialState = {
  cartInfo: new Map(),
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  function increaseQuantity() {
    dispatch({ type: INCREASE_QUANTITY })
  }
  function decreaseQuantity() {
    dispatch({ type: DECREASE_QUANTITY })
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
      value={{ ...state, increaseQuantity, decreaseQuantity, fetchData }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
