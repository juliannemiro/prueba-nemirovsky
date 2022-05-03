import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemListDetailContainer from './components/ItemListDetailContainer/ItemListDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />       
        <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemListDetailContainer />} />
    
        {/* se recibe const {categoryId} = useParam() */}

      </Routes>

    </div>
  );
}

export default App;
