import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AnimacionCarga from './AnimacionCarga/AnimacionCarga'
import ItemList from './ItemList'

const ItemListContainer = () => {

  const [productList, setProductList] = useState ([])

  const { idCategory } = useParams ()

  const getProducts = () => {
    const db = getFirestore()
    const collectionRef = collection (db, 'products')
    getDocs( collectionRef ).then(snapshot => {
      setProductList(snapshot.docs.map( product => ({ id:product.id, ...product.data()})))
    })
  }

  const getProductsById = (idCategory) => {
    const db = getFirestore()
    const collectionRefById = query(collection(db, 'products'), where('category', '==', idCategory))
    getDocs (collectionRefById).then(snapshot => {
      setProductList(snapshot.docs.map( product => ({id:product.id, ...product.data()})))
    })
  }

  useEffect (() => {
    if (idCategory) {
      getProductsById (idCategory)
    } else {
      getProducts()
    }
  }, [idCategory])

  /*const getProducts = () => new Promise((resolve, reject) => {
    setTimeout(()=> resolve(products), 2000)
  })*/

  /*useEffect (() => {

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
  }, [idCategory])*/

  return (

    <>
      { productList.length ? <ItemList productList={productList} />
        : <div class="flex justify-center py-40"><AnimacionCarga /></div>
      }
    </>
    
  )
}

export default ItemListContainer