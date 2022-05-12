import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemListDetailContainer from './components/ItemListDetailContainer/ItemListDetailContainer';
import Cart from './pages/Cart/Cart';
import CartContextProvider from "./Context/CartContexProvider";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemListDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </CartContextProvider>
    </div>
  );
}

export default App;
