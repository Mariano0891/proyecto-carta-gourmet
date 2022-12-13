import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { products } from './mock/Products'

const ItemListContainer = () => {

  const [productList, setProductList] = useState ([])

  const { idCategory } = useParams ()

    const getProducts = () => new Promise((resolve, reject) => {
    setTimeout(()=> resolve(products), 2000)
  })

  useEffect (() => {

    if (idCategory) {
      getProducts()
      .then(products => setProductList(products.filter(product => product.category === idCategory)))
      .catch(error => console.log(error))
    } else {
        getProducts()
        .then(products => setProductList(products))
        .catch(error => console.log(error))
    }  

    return () => setProductList([])
  }, [idCategory])

  return (

    <>
      { productList.length ? <ItemList productList={productList} />
        : <p class="text-yellow-500 text-4xl p-20">Actualizando el contenido</p>
      }
    </>
    
  )
}

export default ItemListContainer