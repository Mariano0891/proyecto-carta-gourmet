import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ({name, category, description, price, stock, image}) => {
    
    return (
        <div className="card lg:card-side bg-gradient-to-r from-yellow-300 to-yellow-50 shadow-xl m-10">
            <figure class="max-w-2xl h-auto p-10"><img src={image} alt={name}/></figure>
            <div className="card-body">
                <h2 class="text-4xl font-semibold underline">{name}</h2>
                <p class="text-xs">Categoria: <span class="underline">{category}</span></p>
                <p>{description}</p>
                <p class="text-3xl text-yellow-600">$ {price}</p>
                <p>Stock disponible: {stock} unidades</p>
                
                <div class="flex flex-inline align-middle justify-center">
                    <ItemCount stock={stock}/>
                    <button className="btn btn-warning">Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail