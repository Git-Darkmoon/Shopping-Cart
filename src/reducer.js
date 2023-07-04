import {
  CLEAR_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_ITEM,
  SHOW_DATA,
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
} from "./actions"

function reducer(state, action) {
  if (action.type === SHOW_DATA) {
    const cart = new Map(action.payload.cartData.map((item) => [item.id, item]))

    return { ...state, cartInfo: cart }
  }

  if (action.type === DECREASE_QUANTITY) {
    const newCart = new Map(state.cartInfo)
    const productID = action.payload.id
    const product = newCart.get(productID)

    const newProduct = { ...product, amount: (product.amount -= 1) }

    newProduct.amount > 0
      ? newCart.set(productID, newProduct)
      : newCart.delete(productID)

    return { ...state, cartInfo: newCart }
  }

  if (action.type === INCREASE_QUANTITY) {
    const newCart = new Map(state.cartInfo)
    const productID = action.payload.id
    const product = newCart.get(productID)

    const newProduct = { ...product, amount: (product.amount += 1) }
    newCart.set(productID, newProduct)

    return { ...state, cartInfo: newCart }
  }

  if (action.type === REMOVE_ITEM) {
    const newCart = new Map(state.cartInfo)
    const productID = action.payload.id
    newCart.delete(productID)

    return { ...state, cartInfo: newCart }
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cartInfo: new Map() }
  }

  if (action.type === OPEN_SIDEBAR) {
    return { ...state, isSideOpen: true }
  }
  if (action.type === CLOSE_SIDEBAR) {
    return { ...state, isSideOpen: false }
  }
  throw new Error(`No matching action type: ${action.type}`)
}

export default reducer
