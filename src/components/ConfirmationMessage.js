import React from 'react'

const ConfirmationMessage = () => {
  return (
    <div class="bg-slate-900 absolute inset-0 h-full w-full flex flex-col rounded-full place-content-evenly text-xl">
        <div>Gracias por tu compra</div>
        <div>Tu codigo de confirmacion es</div>
        <div>
            <button class="btn btn-warning w-1/5">volver al inicio</button>
        </div>
    </div>
  )
}

export default ConfirmationMessage