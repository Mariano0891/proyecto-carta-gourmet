import React from 'react'

const ItemListContainer = ( {greeting} ) => {
  return (
    <div className="font-bold bg-yellow-500 rounded-full max-w-5xl p-10 mt-24 mx-auto" >
        <h1 className="text-5xl mb-8">{greeting}</h1>
        <h3>El sitio se encuentra en construccion</h3>
    </div>
  )
}

export default ItemListContainer