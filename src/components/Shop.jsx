import React, { useState, useEffect } from 'react'
import { API_KEY, API_URL } from '../config'
import Cart from './Cart'
import GoodsList from './GoodsList'
import Preloade from './Preloade'

function Shop() {
  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState([])

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((resp) => resp.json())
      .then((data) => data.featured && setGoods(data.featured))
    setLoading(false)
  }, [])
  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? <Preloade /> : <GoodsList goods={goods} />}
    </main>
  )
}

export default Shop
