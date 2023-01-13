import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import AnimacionCarga from './AnimacionCarga/AnimacionCarga'
import { getFirestore, doc, getDoc } from 'firebase/firestore'


const ItemDetailContainer = () => {

  const { id } = useParams()

  const [item, setItem] = useState ()

  useEffect(() => {
    getProduct ()
  }, [])

  const getProduct = () => {
    const db = getFirestore ()
    const docRef = doc(db, 'products', id)
    getDoc( docRef ).then( snapshot => {
      setItem( {id: snapshot.id, ...snapshot.data()})
    })
  }
  

  /*const getProduct = () => new Promise ( (resolve, reject) => {
    setTimeout (()=> resolve(products.find(product => product.id == id)), 2000)
  })

  useEffect(() => {
    getProduct().then(res => setItem(res))
}, [])*/
  
  return (
    <>
      {item ? <ItemDetail item={item}/>
      :
      <div class="flex justify-center py-40"><AnimacionCarga /></div>}
    </>
  )
}

export default ItemDetailContainer