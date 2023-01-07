import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './context/CartContext'
import ItemCount from './ItemCount'


const ItemDetail = ({item}) => {

    const [itemAdded, setItemAdded] = useState(false)

    const [quantity, setQuantity] = useState()

    const { cart, addToCart } = useContext(CartContext)

    const handleAddToCart = (quantity) => { 
        addToCart(item, quantity)
        setItemAdded (true)
        setQuantity (quantity)
     }
    console.log (cart)
    console.log ([quantity])
    
    return (
        <div className="card lg:card-side bg-gradient-to-r from-yellow-300 to-yellow-50 shadow-xl m-10">
            <figure class="max-w-2xl h-auto p-10"><img src={item.image} alt={item.name}/></figure>
            <div className="card-body">
                <h2 class="text-4xl font-semibold underline">{item.name}</h2>
                <p class="text-xs">Categoria: <span class="underline">{item.category}</span></p>
                <p>{item.description}</p>
                <p class="text-3xl text-yellow-600">$ {item.price}</p>
                <p>Stock disponible: {item.stock} unidades</p>
                { !itemAdded ?
                    <div>
                        <ItemCount stock={item.stock} onAdd={handleAddToCart}/>
                        <div class="flex flex-wrap justify-center m-1">
                           <Link to={`/category/${item.category}`}><button className="btn btn-warning">Volver</button></Link>
                        </div>
                    </div>
                    :
                    <div class="flex flex-wrap justify-center">
                        <Link to={`/category/${item.category}`}><button className="btn btn-warning m-1">Seguir comprando</button></Link>
                        <Link to={`/cart`}><button className="btn btn-warning m-1">Finalizar compra</button></Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default ItemDetail