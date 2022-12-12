import React, { useEffect, useState } from 'react'
import Item from './Item'
import { products } from './mock/Products'


const ItemList = () => {
    
    const [items, setItems] = useState([])

    useEffect ( () => {
        getProducts().then( res => {
            console.log(res);
            setItems ( res);
        })
        .catch( err => {console.log(err)})
    }, [])

    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve ({products})    
            }, 2000);        
        })
    }
    return (
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {items.map (item=> <Item key={item.id} {...item}/>)}
        </div>
    )
}

export default ItemList