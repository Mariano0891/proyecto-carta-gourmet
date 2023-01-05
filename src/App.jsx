import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AnimacionCarga from './components/AnimacionCarga/AnimacionCarga';
import { CartContextProvider } from './components/context/CartContext';

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
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
