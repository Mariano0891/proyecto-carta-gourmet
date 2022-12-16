import React from 'react'
import Item from './Item'



const ItemList = ({productList}) => {
    console.log(productList)
    return (
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {productList.map(item=> <Item key={item.id} {...item} />)}
        </div>
    )
}

export default ItemList