import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = (name, category, description, price, stock, image) => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{category}</p>
                <p>{description}</p>
                <p>{price}</p>
                <p>{stock}</p>
                <div className="card-actions justify-end">
                    <ItemCount stock={stock}/>
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail