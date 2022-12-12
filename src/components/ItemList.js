import React, { useEffect, useState } from 'react'
import vitel from '../assets/imagenes/vitel-tone.jpg'
import lengua from '../assets/imagenes/lengua-vinagreta.jpg'
import Item from './Item'


const products = [
    {id: 1, name: "Vitel Toné", category: "Entradas y conservas", description: "El típico plato navideño ahora a tu disposición los 365 días del año.", price: 1000, stock: 10, image: "https://www.recetasnatura.com.ar/sites/default/files/vitel-thone-1.jpg"},
    {id: 2, name: "Lengua a la vinagreta", category: "Entradas y conservas", description: "Entrada fría, ideal para esos días de calor intenso.", price: 1000, stock: 10, image: "https://i.ytimg.com/vi/qVs0u5Su-is/maxresdefault.jpg"},
    {id: 3, name: "Escabeche de berenjenas", category: "Entradas y conservas", description: "Además de ser una excelente entrada fría también es el acompañamiento ideal para carnes asadas o a la plancha.", price: 1000, stock: 10, image: "https://www.coosur.com/uploads/recetasaceiteoliva/berenjenas-y-zanahorias-al-escabeche.jpg"},
    {id: 4, name: "Arrollado de pollo", category: "Entradas y conservas", description: "Este plato se puede servir frio o caliente", price: 1000, stock: 10, image: "http://alicante.com.ar/uploads/recetas/238_receta.jpg"},
    {id: 5, name: "Vacio al malbec", category: "Empanadas", description: "Vacio desmenuzado en cocción lenta, con cebolla, verdeo, hongos, vino malbec y un suave especiado donde predominan el tomillo y mix de pimientas.", price: 300, stock: 24, image: "https://d320djwtwnl5uo.cloudfront.net/recetas/cover_47tmx80joc_empandascarnejpg.jpg"},
    {id: 6, name: "Cordero a la cerveza negra", category: "Empanadas", description: "Cuarto de cordero a la cerveza negra, condimentado con ajo, romero, pimienta suave y desmenuzado con reducción en sus propios jugos.", price: 350, stock: 24, image: "https://d35gjdqhyew8r0.cloudfront.net/wp-content/uploads/2022/02/empanadas-de-cordero.webp"},
    {id: 7, name: "Bondiola a la barbacoa", category: "Empanadas", description: "Bondiola a la cerveza, con salsa barbacoa y condimento a base de mezcla de pimientas", price: 300, stock: 24, image: "https://www.voxpopuli.net.ar/files/image/84/84031/60fe3913718f6.png"},
    {id: 8, name: "Jamon y queso extra", category: "Empanadas", description: "Con mucho jamón y queso.", price: 250, stock: 36, image: "https://www.frizata.com/ar/files/products/624f2b47896e1-427-4.jpg"},
    {id: 9, name: "Matambre de cerdo a la fugazzeta", category: "Carnes", description: "Matambre de cerdo braceado en parrilla, cebolla caramelizada, queso mozzarella y olivas negras.", price: 1600, stock: 6, image: "https://img-global.cpcdn.com/recipes/9b4d64011c7ecfac/680x482cq70/matambre-de-cerdo-a-la-fugazzeta-foto-principal.jpg"},
    {id: 10, name: "Ribs de cerdo a la barbacoa", category: "Carnes", description: "Costillas de cerdo caramelizadas en salsa de barbacoa.", price: 1500, stock: 8, image: "https://keto-mojo.com/wp-content/uploads/2020/08/InstantPotBBQPorkRibs_Closeup.jpg"},
    {id: 11, name: "Colita de cuadril rellena", category: "Carnes", description: "Colita de cuadril rellana con espinaca, mix de quesos y salsa de hongos.", price: 1800, stock: 6, image: "https://www.recetasnatura.com.ar/sites/default/files/fotos_calendario_760x510-10_0.png"},
    {id: 12, name: "Entrañas al roquefort", category: "Carnes", description: "Entrañas braceadas a la chapa con salsa de manteca, roquefort, crema y verdeo.", price: 1800, stock: 10, image: "https://www.recetasimple.com/fotos/entrana-asada-con-queso-azul-y-cebollas_0.jpg"},
    {id: 13, name: "Papas rusticas", category: "Guarniciones", description: "Papas al horno cocidas con su cascara.", price: 600, stock: 10, image: "https://www.comedera.com/wp-content/uploads/2022/04/Papas-rusticas-shutterstock_2022241940.jpg"},
    {id: 14, name: "Papas españolas", category: "Guarniciones", description: "Rodajas de papa, fritas.", price: 600, stock: 10, image: "https://imag.bonviveur.com/papas-a-la-espanola.jpg"},
    {id: 15, name: "Tortilla de papa", category: "Guarniciones", description: "Tortilla a base de papas, huevos y cebolla.", price: 600, stock: 10, image: "https://assets.unileversolutions.com/recipes-v2/37805.jpg"},
    {id: 16, name: "Puré con nuez moscada", category: "Guarniciones", description: "Un clásico que no necesita descripción.", price: 600, stock: 20, image: "https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/c02ffcb6-feee-4d8d-bd73-10dc97cd8ce5.jpg"},
    {id: 17, name: "Salteado de vegetales y salsa blanca", category: "Guarniciones", description: "Mix de vegetales salteados al wok acompañados de salsa blanca.", price: 600, stock: 10, image: "https://i.ytimg.com/vi/IaTflGt4j5w/maxresdefault.jpg"},
]


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
                resolve (products)    
            }, 2000);        
        })
    }
    return (
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {items.map( item=> <Item key={item.id} {...item}/>)}
        </div>
    )
}

export default ItemList