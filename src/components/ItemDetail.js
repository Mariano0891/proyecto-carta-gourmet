import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ({name, category, description, price, stock, image}) => {
    
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt={name}/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Categoria:{category}</p>
                <p>{description}</p>
                <p>$ {price}</p>
                <p>Stock: {stock}</p>
                <ItemCount stock={stock}/>
                <div className="card-actions justify-end">
                    <button className="btn btn-warning">Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail