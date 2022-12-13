import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { products } from './mock/Products'

const ItemDetailContainer = () => {

  const { id } = useParams()

  const [item, setItem] = useState ()

  const getProduct = () => new Promise ( (resolve, reject) => {
    setTimeout (()=> resolve(products.find(product => product.id == id)), 2000)
  })

  useEffect(() => {
    getProduct().then(res => setItem(res))
}, [])
  
  return (
    <>
      {item ? <ItemDetail name={item.name} category={item.category} description={item.description} price={item.price} stock={item.stock} image={item.image}/>
      :
      <p class="text-yellow-500 text-4xl p-20">Actualizando el contenido</p>}
    </>
  )
}

export default ItemDetailContainer