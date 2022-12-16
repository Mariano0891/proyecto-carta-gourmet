import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({name, category, price, image, id}) => {
  return (
    <div className="card bg-yellow-50 shadow-xl m-3 border-4 border-yellow-500">
        <figure className="px-10 pt-10">
            <img src={image} alt={name} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <p>{category}</p>
            <h2 className="card-title">{name}</h2>
            <p>${price}</p>
            <div className="card-actions">
              <Link to={`/item/${id}`}>
                <button className="btn btn-warning">Ver detalle</button>
              </Link>  
            </div>
        </div>
    </div>
  )
}

export default Item