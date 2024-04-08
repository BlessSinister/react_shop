import React, { useEffect, useContext } from 'react'
import { ShopContext } from '../Context'
import { API_KEY, API_URL } from '../config'
import Cart from './Cart'
import GoodsList from './GoodsList'
import Preloade from './Preloade'
import { BasketList } from './BasketList'
import { Alert } from './Alert'

function Shop() {
  const { goods, setGoods, loading, order, isBasketShow, alertName } =
    useContext(ShopContext)

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((resp) => resp.json())
      .then((data) => setGoods(data.featured))
  }, [])
  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? <Preloade /> : <GoodsList goods={goods} />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  )
}

export default Shop
