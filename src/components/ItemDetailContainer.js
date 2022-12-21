import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { products } from './mock/Products'
import AnimacionCarga from './AnimacionCarga/AnimacionCarga'

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
      <div class="flex justify-center py-40"><AnimacionCarga /></div>}
    </>
  )
}

export default ItemDetailContainer