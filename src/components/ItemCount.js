import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import {RiSubtractLine} from 'react-icons/ri'
import { useState } from 'react'

const ItemCount = (stock) => {

  const [count, setCount] = useState (1)

  const onAdd = () => {
    if (count < stock) {
      setCount ( count => count + 1 )
    }
  }

  const onSub = () => {
    if (count > 1) {
      setCount ( count => count - 1 )
    }
  }

  return (
    <div className="text-2xl m-3 text-yellow-300 p-4 border-2 border-yellow-500 w-fit">
      <button onClick={onSub} className="px-3 bg-yellow-400 text-black rounded-full"><RiSubtractLine/></button>
      <span className="mx-3 px-3 text-3xl">{count}</span>
      <button onClick={onAdd} className="px-3 bg-yellow-400 text-black rounded-full"><IoMdAdd/></button>
    </div>
  )
}

export default ItemCount