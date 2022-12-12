import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { products } from './mock/Products'

const ItemDetailContainer = () => {

  const [item, setItem] = useState ({})

  const getProduct = () => new Promise ( (resolve, reject) => {
    setTimeout (()=> resolve(products.find(product => product.id === 1)), 2000)
  })

  useEffect(() => {
    getProduct().then(res => setItem(res))
}, [])
  
  return (
    <div>
        <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer