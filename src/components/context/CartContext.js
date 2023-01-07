import { createContext, useState } from "react";

export const CartContext =createContext ()

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        if (cart.length === 0) {
            setCart ([{
                ...item,
                quantity: quantity
            }])
        } else {
            const addedProduct = cart.find(product => product.id === item.id)
            if(!addedProduct){
                setCart ([
                    ...cart,
                    {
                        ...item,
                        quantity: quantity
                    }
                ])
            } else {
                const filteredProducts = cart.filter (product => product.id !== item.id)
                setCart ([
                    ...filteredProducts,
                    {
                        ...addedProduct,
                        quantity: addedProduct.quantity + quantity
                    }
                ])
            }
        }
    }

    const totalCartQuantity = () => {
        return cart.reduce((acc, product) => acc + product.quantity, 0)
    }

    const totalCartAmount = () => {
        return cart.reduce ((acc, product) => acc + product.quantity * product.price, 0)
    }

    const emptyCart = () => {
        setCart([])
    }

    const deleteItemById = (id) => {
        const newCart= cart.filter(item => item.id !== id)
        setCart(newCart)
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            totalCartQuantity,
            totalCartAmount,
            emptyCart,
            deleteItemById,
        }}>
            {children}
        </CartContext.Provider>
    )
}