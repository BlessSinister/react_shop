import { BasketItem } from './BasketItem'
import { useContext } from 'react'
import { ShopContext } from '../Context'
function BasketList(props) {
  const { order = [], handleBasketShow } = useContext(ShopContext)

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity
  }, 0)
  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>
      {order.length ? (
        order.map((item) => <BasketItem key={item.id} {...item} />)
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active">
        Общая стоимость: {totalPrice} руб.
      </li>

      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
      <li className="collection-item">
        <button className="secondary-content btn btn-small">Оформить</button>
      </li>
    </ul>
  )
}

export { BasketList }
