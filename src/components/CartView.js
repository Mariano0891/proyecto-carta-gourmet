import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'
import { GoTrashcan } from 'react-icons/go'
import { Link } from 'react-router-dom'

const CartView = () => {

  const { cart, totalCartAmount, deleteItemById, emptyCart } = useContext(CartContext)
  
  const handleDeleteItem = (id) => { 
    deleteItemById (id)
  }
  return (
    <div class="flex flex-col m-4">
        {cart.length > 0 ? (
            <div>
                <h2 class="text-yellow-600 text-4xl m-2 font-semibold">Tu compra</h2>
                <div class="container w-4/5 mx-auto flex bg-yellow-500 my-6 p-4 font-semibold">
                    <div class="w-[12%]"></div>
                    <div class="w-[45%]">Producto</div>
                    <div class="w-[15%]">Precio u.</div>
                    <div class="w-[12%]">Cantidad</div>
                    <div class="w-[15%]">Precio total</div>
                </div>
                {cart.map(item => (
                    <div key={item.id} class="container w-4/5 h-28 mx-auto flex bg-yellow-100 my-1">
                        <div class="flex justify-center items-center w-[12%] ">
                            <button onClick={() => handleDeleteItem(item.id)} class="text-2xl"><GoTrashcan/></button>
                        </div>
                        <div class="flex justify-center items-center w-[15%]">
                            <img src={item.image} alt={item.name} class="h-24"/>
                        </div>
                        <div class="flex justify-center items-center w-[30%]">
                            <h3>{item.name}</h3>
                        </div>
                        <div class="flex justify-center items-center w-[15%]">
                            <h3>$ {item.price}</h3>
                        </div>
                        <div class="flex justify-center items-center w-[12%]">
                            <h3>{item.quantity}</h3>
                        </div>
                        <div class="flex justify-center items-center w-[15%]">
                            <h3>$ {item.quantity * item.price}</h3>
                        </div>
                    </div>
                ))}
                <div class="w-4/5 mx-auto justify-center flex m-2">
                    <div class="w-3/5 h-14 flex relative bg-yellow-500 items-center justify-evenly font-semibold text-xl">
                        <h3>Total compra:</h3>
                        <h3>$ {totalCartAmount()}</h3>
                    </div>            
                </div>
                <div class="w-4/5 mx-auto flex justify-center m-2">
                    <div class="w-3/5 h-14 flex relative items-center justify-evenly text-slate-50 font-semibold">
                        <button onClick={() => emptyCart()} class="btn btn-warning w-44">Vaciar carrito</button>
                        <Link to='/checkout'><button class="btn btn-warning w-44">Finalizar Compra</button></Link>
                    </div>            
                </div>
            </div>
           ) : (
            <div>
                <h2 class="text-yellow-600 text-2xl m-4 font-semibold">Aun no has agregado productos a tu compra</h2>
                <div class="m-8">
                    <Link to='/'><button class="btn btn-warning">volver al menu</button></Link>
                </div>
            </div>
           )
        }
    </div>
  )
}

export default CartView