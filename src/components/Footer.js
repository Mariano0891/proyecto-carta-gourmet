import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {SlSocialTwitter} from 'react-icons/sl'
import {AiOutlineFacebook} from 'react-icons/ai'

const Footer = () => {
  return (
    <div class="flex flex-wrap justify-between bg-yellow-100 p-2 font-medium text-sm">
        <h4>Carta Gourmet - todos los derechos reservados</h4>
        <div class="flex space-x-4">
            <p>Seguinos en nuestras redes</p>
            <button class="text-2xl"><BsInstagram/></button>
            <button class="text-2xl"><SlSocialTwitter/></button>
            <button class="text-2xl"><AiOutlineFacebook/></button>
        </div>
    </div>
  )
}

export default Footer