import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App bg-stone-900">
      <Navbar/>
      <ItemListContainer greeting={'Bienvenido a Carta Gourmet'}/>
      <ItemCount/>
    </div>
  );
}

export default App;
