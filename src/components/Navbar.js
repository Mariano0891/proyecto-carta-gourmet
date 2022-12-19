import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo/logo-carta-gourmet-reducido.png'
import CartWidget from './CartWidget'


const Navbar = () => {
  return (
    <div className="navbar bg-yellow-100 h-24 shadow-md shadow-yellow-500">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to={'/'}>Inicio</Link></li>
                    <li><Link to={'/category/entradas'}>Entradas</Link></li>
                    <li><Link to={'/category/empanadas'}>Empanadas</Link></li>
                    <li><Link to={'/category/carnes'}>Carnes</Link></li>
                    <li><Link to={'/category/guarniciones'}>Guarniciones</Link></li>
                </ul>
            </div>
            <Link to={'/'}><img src={logo}/></Link>
        </div>
        <div>
            <ul class="hidden lg:flex space-x-6 text-xl p-1">
                <li class="p-2 border-b-2 border-transparent hover:border-yellow-500"><Link to={'/'}>Inicio</Link></li>
                <li class="p-2 border-b-2 border-transparent hover:border-yellow-500"><Link to={'/category/entradas'}>Entradas</Link>
                    {/*<ul class="hidden">
                        <li><a href="">Menu de la semana</a></li>
                        <li><a href="">Entradas / Conservas</a></li>
                        <li><a href="">Empanadas</a></li>
                        <li><a href="">Carnes</a></li>
                        <li><a href="">Guarniciones</a></li>
                    </ul>*/}
                </li>
                <li class="p-2 border-b-2 border-transparent hover:border-yellow-500"><Link to={'/category/empanadas'}>Empanadas</Link></li>
                <li class="p-2 border-b-2 border-transparent hover:border-yellow-500"><Link to={'/category/carnes'}>Carnes</Link></li>
                <li class="p-2 border-b-2 border-transparent hover:border-yellow-500"><Link to={'/category/guarniciones'}>Guarniciones</Link></li>
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