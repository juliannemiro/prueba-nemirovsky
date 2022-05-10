import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemListDetailContainer from './components/ItemListDetailContainer/ItemListDetailContainer';
import Cart from './pages/Cart/Cart'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />       
        <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemListDetailContainer />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
