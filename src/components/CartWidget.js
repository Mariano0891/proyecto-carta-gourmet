import React, { useContext } from 'react'
import { GiMeal } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { CartContext } from './context/CartContext'

const CartWidget = () => {

  const { totalCartQuantity, totalCartAmount } = useContext(CartContext)

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle btn-lg">
        <div className="indicator">
          <div fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> <GiMeal className="h-14 w-14"/></div>
          <span className="badge badge-sm indicator-item">{ totalCartQuantity() }</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">{ totalCartQuantity() } Productos</span>
          <span className="text-info text-yellow-600 font-semibold">Subtotal: ${totalCartAmount()}</span>
          <div className="card-actions flex justify-center">
            <Link to={`/cart`}><button className="btn btn-warning btn-block">Ir al Carrito</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartWidget