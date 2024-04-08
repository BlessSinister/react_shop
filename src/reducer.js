export function reducer(state, { type, payload }) {
  switch (type) {
    case 'SET_GOODS':
      return { ...state, goods: payload || [], loading: false }
    case 'CLOSE_ALERT':
      return { ...state, alertName: '' }
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter((item) => item.id !== payload.id),
      }
    case 'ADD_TO_BASKET': {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id
      )
      let order = null
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        }
        order = [...state.order, newItem]
        console.log(order)
      } else {
        order = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            }
          } else {
            return orderItem
          }
        })
      }

      return {
        ...state,
        order,
        alertName: payload.name,
      }
    }
    case 'DEC_QUANTITY':
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.id === payload.id) {
            const newQuantity = el.quantity - 1
            return {
              ...el,
              quantity: newQuantity >= 0 ? newQuantity : 0,
            }
          } else {
            return el
          }
        }),
      }
    case 'INC_QUANTITY':
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.id === payload.id) {
            const newQuantity = el.quantity + 1
            return {
              ...el,
              quantity: newQuantity,
            }
          } else {
            return el
          }
        }),
      }
    case 'HANDLE_BASKET_SHOW':
      return { ...state, isBasketShow: !state.isBasketShow }
    default:
      return state
  }
}
