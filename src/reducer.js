import { SHOW_DATA } from "./actions"

function reducer(state, action) {
  if (action.type === SHOW_DATA) {
    const cart = new Map(action.payload.cartData.map((item) => [item.id, item]))

    return { ...state, cartInfo: cart }
  }

  throw new Error(`No matching action type: ${action.type}`)
}

export default reducer
