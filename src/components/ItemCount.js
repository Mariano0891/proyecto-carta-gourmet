import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import {RiSubtractLine} from 'react-icons/ri'
import { useState } from 'react'

const ItemCount = ({stock}) => {

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
    <div class="text-2xl m-1 w-56">
      <button onClick={onSub} class="px-3 btn btn-warning text-2xl"><RiSubtractLine/></button>
      <span class="mx-4 px-2 text-3xl">{count}</span>
      <button onClick={onAdd} class="px-3 btn btn-warning text-2xl"><IoMdAdd/></button>
    </div>
  )
}

export default ItemCount