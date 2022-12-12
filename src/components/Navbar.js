import React from 'react'
import logo from '../assets/logo/logo-carta-gourmet-reducido.png'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 h-24 shadow-md shadow-yellow-500">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Inicio</a></li>
                    <li tabIndex={0}>
                        <a className="justify-between">
                            Menu
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                        </a>
                            <ul className="p-2">
                                <li><a>Menu de la semana</a></li>
                                <li><a>Entradas-Conservas</a></li>
                                <li><a>Empanadas</a></li>
                                <li><a>Carnes</a></li>
                                <li><a>Guarniciones</a></li>
                            </ul>
                    </li>
                    <li tabIndex={0}>
                        <a className="justify-between">
                            Ofertas
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                        </a>
                            <ul className="p-2">
                                <li><a>Packs</a></li>
                                <li><a>Menu de la semana</a></li>
                                <li><a>Destacados</a></li>
                            </ul>
                    </li>
                    <li><a>Novedades</a></li>
                    <li><a>Contacto</a></li>
                </ul>
            </div>
            <a href=""><img src={logo}/></a>
        </div>
        <div>
            <ul class="hidden lg:flex space-x-6 text-xl p-1">
                <li class="p-2 border-b border-white hover:border-b hover:border-yellow-500"><a href="">Inicio</a></li>
                <li class="p-2 border-b border-white hover:border-b hover:border-yellow-500"><a href="">Menu</a>
                    {/*<ul class="hidden">
                        <li><a href="">Menu de la semana</a></li>
                        <li><a href="">Entradas / Conservas</a></li>
                        <li><a href="">Empanadas</a></li>
                        <li><a href="">Carnes</a></li>
                        <li><a href="">Guarniciones</a></li>
                    </ul>*/}
                </li>
                <li class="p-2 border-b border-white hover:border-b hover:border-yellow-500"><a href="">Ofertas</a></li>
                <li class="p-2 border-b border-white hover:border-b hover:border-yellow-500"><a href="">Novedades</a></li>
                <li class="p-2 border-b border-white hover:border-b hover:border-yellow-500"><a href="">Contacto</a></li>
            </ul>
        </div>
        {/* <div className="hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
                <li><a>Inicio</a></li>
                <li tabIndex={0}>
                    <a>
                    Menu
                    </a>
                    <ul className="p-2">
                        <li><a>Menu de la semana</a></li>
                        <li><a>Entradas-Conservas</a></li>
                        <li><a>Empanadas</a></li>
                        <li><a>Carnes</a></li>
                        <li><a>Guarniciones</a></li>
                    </ul>
                </li>
                <li tabIndex={0}>
                    <a>
                    Ofertas
                    </a>
                    <ul className="p-2">
                        <li><a>Packs</a></li>
                        <li><a>Menu de la semana</a></li>
                        <li><a>Destacados</a></li>
                    </ul>
                </li>
                <li><a>Novedades</a></li>
                <li><a>Contacto</a></li>
            </ul>
        </div>*/}
        <div className="navbar-end">
            <CartWidget />
        </div>
    </div>
  )
}

export default Navbar