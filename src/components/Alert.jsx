import React, { useEffect } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context'

function Alert(props) {
  const { alertName: name = '', closeAlert = Function.prototype } =
    useContext(ShopContext)
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000)

    return () => {
      clearTimeout(timerId)
    }
  }, [name])
  return (
    <div className="" id="toast-container">
      <div className="toast">{name} добавлен в корзину</div>
    </div>
  )
}

export { Alert }
