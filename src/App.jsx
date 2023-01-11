import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './components/context/CartContext';
import CartView from './components/CartView';
import Footer from './components/Footer';
import CheckOut from './components/CheckOut';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App bg-stone-900">
          <Navbar/>
          <Routes>
            <Route path='/' element={ <ItemListContainer/>} />
            <Route path='/category/:idCategory' element={ <ItemListContainer /> } />
            <Route path='/item/:id' element={ <ItemDetailContainer /> } />
            <Route path='/cart' element={ <CartView /> } />
            <Route path='/checkout' element={ <CheckOut /> } />
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
